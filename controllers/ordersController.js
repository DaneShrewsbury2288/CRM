const db = require("../models");
const Order = db.Order;

module.exports = {
  findAll: function (req, res) {
    Order
      .find(req.query)
      .sort({ date: -1 })
      // populate all users, clients and notes associated with tasks
      .populate({
        path: 'user client note',
        populate: {
          path: 'user'
        },
        populate: {
          path: 'client'
        },
        populate: {
          path: 'note'
        }
      })
      .then(dbModel => {
        res.status(200).json({
          orders: dbModel.map(model => {
            return {
              id: model._id,
              client: model.client,
              lineItems: model.lineItems,
              user: model.user,
              note: model.note,
              fulfilled: model.fulfilled,
              created_at: model.created_at
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
    console.log(req.body)
    Order
      .create(req.body)
      // associate client ID with order
      // .then(function (dbClient) {
      //   return db.Client.findOneAndUpdate({}, { $push: { client: dbClient._id } }, { new: true });
      // })
      // // update product quantity
      // .then(function (dbProduct) {
      //   return db.Product.findOneAndUpdate({}, { $push: { product: dbProduct._id } }, { new: true });
      // })
      // // associate user ID with order
      // .then(function (dbUser) {
      //   return db.User.findOneAndUpdate({}, { $push: { user: dbUser._id } }, { new: true });
      // })
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