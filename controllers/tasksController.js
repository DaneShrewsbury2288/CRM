const db = require("../models");
const Task = db.Task;

module.exports = {
  findAll: function (req, res) {
    Task
      .find(req.query)
      .sort({ date: -1 })
      // populate associated client
      .populate("client", "_id name")
      // populate associated user
      .populate("user", "_id firstName lastName")
      .then(dbModel => {
        res.status(200).json({
          tasks: dbModel.map(model => {
            return {
              _id: model._id,
              user: model.user,
              client: model.client,
              assignDate: model.assignDate,
              assignedStatus: model.assignedStatus,
              completionStatus: model.completionStatus
            };
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Task
      .create(req.query)
      // associate client ID with task
      .then(function (dbClient) {
        return db.Client.findOneAndUpdate({}, { $push: { clients: dbClient._id } }, { new: true });
      })
      // associate user ID with task
      .then(function (dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { users: dbUser._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Task
      .findOneAndUpdate({ _id: req.params.id }, req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};