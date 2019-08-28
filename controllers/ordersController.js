const db = require("../models");
const Order = db.Order;

module.exports = {
  findAll: function (req, res) {
    Order
      .find(req.query)
      .sort({ date: -1 })
      .populate("product", "_id productName quantity price")
      // .populate("user", "_id firstName lastName")
      // .populate("client", "_id name")
      .then(dbModel => {
        res.status(200).json({
          orders: dbModel.map(model => {
            return {
              _id: model._id,
              product: model.product,
              quantity: model.quantity
            };
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Order
      .findById(req.params.id)
      // .populate("client")
      // .populate("product")
      // .populate("user")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Order
      .create(req.query)
      // associate client ID with order
      .then(function(dbClient) {
        return db.Client.findOneAndUpdate({}, { $push: { clients: dbClient._id } }, { new: true });
      })
      // update product quantity
      .then(function(dbProduct) {
        return db.Product.findOneAndUpdate({}, { $push: { products: dbProduct._id } }, { new: true });
      })
      // associate user ID with order
      .then(function(dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { users: dbUser._id } }, { new: true });
      })
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
  }
};