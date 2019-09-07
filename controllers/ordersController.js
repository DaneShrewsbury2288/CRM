const db = require("../models");
const mongoose = require("mongoose");
const Order = db.Order;

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
    Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // if order needs to be updated after client completes order
  update: function (req, res) {
    Order
      // update product quantity
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
  getOrderTotal: function (req, res) {
    const userID = req.params.userid;
    Order
      .aggregate([
        { $match: { 'user': mongoose.Types.ObjectId(userID) } },
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
        // { find: { "created_at": { "$gte": firstDate, "$lt": secondDate } } },
        { $group:
          {
            _id: '$user',
            totalAmount: { $sum: { $multiply: ["$product.price", "$lineItems.quantity"] } }
          }
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};