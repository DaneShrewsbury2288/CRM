const db = require("../models");
const Client = db.Client;

module.exports = {
  findAll: function(req, res) {
    Client
    .find(req.query)
    .sort({ date: -1 })
    // populate orders
    .populate("order", "_id fulfilled created_at")
    // populate associated user
    .populate("user", "_id firstName lastName")
    .then(dbModel => {
      res.status(200).json({
        orders: dbModel.map(model => {
          return {
            _id: model._id,
            product: model.order,
            user: model.user
          };
        })
      })
    })
    .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    Client
      .findById(req.params.id)
      .populate("orders")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Client
      .create(req.query)
      // associate all orders with client
      .then(function (dbOrder) {
        return db.Order.findOneAndUpdate({}, { $push: { products: dbOrder._id } }, { new: true });
      })
      // associate user ID with order
      .then(function (dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { users: dbUser._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Client
      .findOneAndUpdate({ _id: req.params.id }, req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};