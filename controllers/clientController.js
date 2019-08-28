const db = require("../models");
const Client = db.Client;

module.exports = {
  findAll: function(req, res) {
    Client
      .find(req.query)
      .sort({ date: -1 })
      .populate("orders")
      .then(dbModel => res.json(dbModel))
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