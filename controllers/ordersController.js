const db = require("../models");
const mongoose = require("mongoose");
const Order = db.Order;
const Product = db.Product;

module.exports = {
  findAll: function (req, res) {
    Order
      .find(req.query)
      .sort({ created_at: -1 })
      // populate all users, clients and notes associated with order
      .populate({
        path: 'user client note lineItems.product product',
        populate: {
          path: 'user'
        },
        populate: {
          path: 'product'
        },
        populate: {
          path: 'client'
        },
        populate: {
          path: 'note'
        },
        populate: {
          path: 'lineItems.product'
        }
      })
      .then(dbModel => {
        res.status(200).json({
          orders: dbModel.map(model => {
            return {
              _id: model._id,
              client: model.client,
              user: model.user,
              product: model.product,
              lineItems: model.lineItems,
              note: model.note,
              created_at: model.created_at,
              checked_out: model.checked_out,
              completedDate: model.completedDate
            };
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Order
      .findById(req.params.id)
      .populate({
        path: 'user clients notes product',
        populate: {
          path: 'user'
        },
        populate: {
          path: 'client'
        },
        populate: {
          path: 'note'
        },
        populate: {
          path: 'product'
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    const reqBody = req.body;
    let items = [];
    for (let i = 0; i < reqBody.lineItems.length; i++) {
      if (reqBody.lineItems[i].quantity > 0) {
        items.push(reqBody.lineItems[i])
      }
    }
    const userOrder = {
      "client": reqBody.client[0]._id,
      "user": reqBody.user[0]._id,
      "created_at": reqBody.created_at,
      "checked_out": reqBody.checked_out,
      "completedDate": reqBody.completedDate,
      "fulfilled": reqBody.fulfilled,
      "lineItems": items
    }
    Order
      .create(userOrder)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    for (let i = 0; i < reqBody.lineItems.length; i++) {
      const productID = reqBody.lineItems[i].product._id;
      let productQuantity = 0;
      if (req.body.lineItems[i].quantity !== undefined) {
        productQuantity = reqBody.lineItems[i].quantity;
      }
      Product
        .findByIdAndUpdate(
          {
            _id: productID,
            quantity: { $gte: productQuantity }
          },
          { $inc:
              { quantity: -productQuantity }
          }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  update: function (req, res) {
    Order
      .findOneAndUpdate({ _id: req.params.id }, req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Order
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserOrderTotal: function (req, res) {
    const userID = req.params.userid;
    const dateOne = req.params.dayone;
    const dateTwo = req.params.daytwo;
    Order
      .aggregate([
        {
          $match: {
            $and: [
              { 'user': mongoose.Types.ObjectId(userID) },
              { created_at: { $gte: new Date(dateOne) } },
              { created_at: { $lt: new Date(dateTwo) } }
            ]
          }
        },
        {
          $lookup: {
            from: "products",
            localField: "lineItems.product",
            foreignField: "_id",
            as: "product"
          }
        },
        {
          $unwind: "$product",
        },
        {
          $unwind: "$lineItems"
        },
        {
          $group: {
            _id: null,
            revenue: {
              $sum: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            cost: {
              $sum: {
                $multiply: ["$product.cost", "$lineItems.quantity"]
              }
            },
            profit: {
              $sum: {
                $subtract: [
                  { $multiply: ["$product.price", "$lineItems.quantity"] },
                  { $multiply: ["$product.cost", "$lineItems.quantity"] }
                ]
              }
            },
            itemQuantity: {
              $sum: "$lineItems.quantity"
            },
            averageOrderQuantity: {
              $avg: "$lineItems.quantity"
            },
            averageOrderTotal: {
              $avg: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            largestOrderTotal: {
              $max: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            lowestOrderTotal: {
              $min: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            standardDeviation: {
              $stdDevPop: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            averageCheckout: {
              $avg: { $subtract: ["$checked_out", "$created_at"] }
            },
            lastSalesDate: {
              $last: "$created_at"
            },
            itemsSold: {
              $push: {
                itemID: "$product._id",
                quantity: "$lineItems.quantity",
                date: "$created_at"
              }
            }
          },
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getClientOrderTotal: function (req, res) {
    const clientID = req.params.clientid;
    const dateOne = req.params.dayone;
    const dateTwo = req.params.daytwo;
    Order
      .aggregate([
        {
          $match: {
            $and: [
              { 'client': mongoose.Types.ObjectId(clientID) },
              { created_at: { $gte: new Date(dateOne) } },
              { created_at: { $lt: new Date(dateTwo) } }
            ]
          }
        },
        { $sort: { created_at: 1 } },
        {
          $lookup: {
            from: "products",
            localField: "lineItems.product",
            foreignField: "_id",
            as: "product"
          }
        },
        {
          $unwind: "$product",
        },
        {
          $unwind: "$lineItems"
        },
        {
          $group: {
            _id: null,
            revenue: {
              $sum: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            cost: {
              $sum: {
                $multiply: ["$product.cost", "$lineItems.quantity"]
              }
            },
            profit: {
              $sum: {
                $subtract: [
                  { $multiply: ["$product.price", "$lineItems.quantity"] },
                  { $multiply: ["$product.cost", "$lineItems.quantity"] }
                ]
              }
            },
            itemQuantity: {
              $sum: "$lineItems.quantity"
            },
            averageOrderQuantity: {
              $avg: "$lineItems.quantity"
            },
            averageOrderTotal: {
              $avg: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            largestOrderTotal: {
              $max: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            lowestOrderTotal: {
              $min: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            standardDeviation: {
              $stdDevPop: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            averageCheckout: {
              $avg: { $subtract: ["$checked_out", "$created_at"] }
            },
            lastSalesDate: {
              $last: "$created_at"
            },
            itemsSold: {
              $push: {
                itemID: "$product._id",
                quantity: "$lineItems.quantity",
                date: "$created_at"
              }
            }
          },
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getBusinessTotal: function (req, res) {
    const dateOne = req.params.dayone;
    const dateTwo = req.params.daytwo;
    Order
      .aggregate([
        {
          $match: {
            $and: [
              { created_at: { $gte: new Date(dateOne) } },
              { created_at: { $lt: new Date(dateTwo) } }
            ]
          }
        },
        {
          $lookup: {
            from: "products",
            localField: "lineItems.product",
            foreignField: "_id",
            as: "product"
          }
        },
        {
          $unwind: "$product",
        },
        {
          $unwind: "$lineItems"
        },
        {
          $group: {
            _id: null,
            revenue: {
              $sum: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            cost: {
              $sum: {
                $multiply: ["$product.cost", "$lineItems.quantity"]
              }
            },
            profit: {
              $sum: {
                $subtract: [
                  { $multiply: ["$product.price", "$lineItems.quantity"] },
                  { $multiply: ["$product.cost", "$lineItems.quantity"] }
                ]
              }
            },
            itemQuantity: {
              $sum: "$lineItems.quantity"
            },
            averageOrderQuantity: {
              $avg: "$lineItems.quantity"
            },
            averageOrderTotal: {
              $avg: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            largestOrderTotal: {
              $max: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            lowestOrderTotal: {
              $min: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            standardDeviation: {
              $stdDevPop: {
                $multiply: ["$product.price", "$lineItems.quantity"]
              }
            },
            averageCheckout: {
              $avg: { $subtract: ["$checked_out", "$created_at"] }
            },
            lastSalesDate: {
              $last: "$created_at"
            },
            itemsSold: {
              $push: {
                itemID: "$product._id",
                quantity: "$lineItems.quantity",
                date: "$created_at"
              }
            }
          },
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getClientOrders: function (req, res) {
    const clientID = req.params.id;
    Order
      .find({ client: mongoose.Types.ObjectId(clientID) })
      .sort({ created_at: -1 })
      .populate({
        path: 'user client lineItems.product product',
        populate: {
          path: 'client',
          match: { _id: mongoose.Types.ObjectId(clientID) }
        },
        populate: {
          path: 'user'
        },
        populate: {
          path: 'product'
        },
        populate: {
          path: 'lineItems.product'
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserOrders: function (req, res) {
    const userID = req.params.id;
    Order
      .find({ user: mongoose.Types.ObjectId(userID) })
      .sort({ created_at: -1 })
      .populate({
        path: 'user client lineItems.product product',
        populate: {
          path: 'user',
          match: { _id: mongoose.Types.ObjectId(userID) }
        },
        populate: {
          path: 'product'
        },
        populate: {
          path: 'client'
        },
        populate: {
          path: 'lineItems.product'
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // sales by zip code
};