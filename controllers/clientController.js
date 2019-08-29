const db = require("../models");
const Client = db.Client;

module.exports = {
  findAll: function (req, res) {
    Client
      .find(req.query)
      .sort({ date: -1 })
      // user assigned to client
      .populate("user", "_id firstName lastName")
      // all orders for client and if they have been fulfilled
      .populate("order", "_id fulfilled created_at")
      .then(dbModel => {
        res.status(200).json({
          clients: dbModel.map(model => {
            return {
              _id: model._id,
              name: model.name,
              email: model.email,
              phone: model.phone,
              zipCode: model.zipCode,
              joinedDate: model.joinedDate,
              user: model.user,
              order: model.order
            };
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Client
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Client
      // defaults to with no orders or users assigned
      .create(req.query)
      // associate user ID with client
      .then(function (dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { users: dbUser._id } }, { new: true });
      })
      // associate order ID with client
      .then(function (dbOrder) {
        return db.Order.findOneAndUpdate({}, { $push: { orders: dbOrder._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Client
      .findOneAndUpdate({ _id: req.params.id },
        // add ability to assign user to client
        // { $set: 
        //   { 
        //     users: req.params.user_id,
        //     overwrite: true
        //   }
        // }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};