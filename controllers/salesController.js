const db = require("../models");
const Sales = db.Sales;

module.exports = {
  findAll: function (req, res) {
    Sales
      .find(req.query)
      .sort({ date: -1 })
      // .populate("clients")
      // .populate("products")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Sales
      .findById(req.params.id)
      // .populate("clients")
      // .populate("products")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Sales
      .create(req.body)
      // update product quantity
      // associate client ID with sale
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // if sale needs to be updated after client completes sale
  update: function (req, res) {
    Sales
      // update product quantity
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Sales
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};