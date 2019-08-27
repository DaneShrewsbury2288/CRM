const db = require("../models");
const Sale = db.Sale;

module.exports = {
  findAll: function (req, res) {
    Sale
      .find(req.query)
      .sort({ date: -1 })
      .populate("clients")
      .populate("products")
      .populate("users")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Sale
      .findById(req.params.id)
      .populate("clients")
      .populate("products")
      .populate("users")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Sale
      .create(req.query)
      // update product quantity
      // associate client ID with sale
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // if sale needs to be updated after client completes sale
  update: function (req, res) {
    Sale
      // update product quantity
      .findOneAndUpdate({ _id: req.params.id }, req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Sale
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};