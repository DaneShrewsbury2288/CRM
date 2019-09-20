const db = require("../models");
const mongoose = require("mongoose");
const Task = db.Task;

module.exports = {
  findAll: function (req, res) {
    Task
      .find(req.query)
      // sort by due date
      .sort({ dueDate: 'desc' })
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
          tasks: dbModel.map(model => {
            return {
              _id: model._id,
              user: model.user,
              client: model.client,
              assignDate: model.assignDate,
              dueDate: model.dueDate,
              completedDate: model.completedDate,
              assignedStatus: model.assignedStatus,
              completionStatus: model.completionStatus,
              description: model.description,
              note: model.note,
            };
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    let userID = req.params.id;
    Task
      .aggregate([
        { $match: { 'user': mongoose.Types.ObjectId(userID) } },
        {
          $group: {
            _id: null,
            taskCount: { $sum: 1 },
            avgTimeDueToAssign: {
              "$avg": {
                "$subtract": [
                  { "$ifNull": ["$dueDate", 0] },
                  { "$ifNull": ["$assignDate", 0] }
                ]
              }
            },
            avgTimeDueToComplete: {
              "$avg": {
                "$subtract": [
                  { "$ifNull": ["$dueDate", 0] },
                  { "$ifNull": ["$completedDate", 0] }
                ]
              }
            },
            avgTimeAssignToComplete: {
              "$avg": {
                "$subtract": [
                  { "$ifNull": ["$assignDate", 0] },
                  { "$ifNull": ["$completedDate", 0] }
                ]
              }
            },
            toDoCount: {
              "$max": {
                "$cond": [
                  { "$eq": ["$completionStatus", /to-do/] },
                  "$count",
                  0
                ]
              }
            },
            inProgressCount: {
              "$max": {
                "$cond": [
                  { "$eq": ["$completionStatus", /in-progress/] },
                  "$count",
                  0
                ]
              }
            },
            completedCount: {
              "$max": {
                "$cond": [
                  { "$eq": ["$completionStatus", /completed/] },
                  "$count",
                  0
                ]
              }
            }
          }
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Task
      .findById(req.params.id)
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
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Task
      .create(req.body)
      // associate client ID with task
      .then(function (dbClient) {
        return db.Client.findOneAndUpdate({}, { $push: { client: dbClient._id } }, { new: true });
      })
      // associate user ID with task
      .then(function (dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { user: dbUser._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Task
      .findOneAndUpdate({ _id: req.params.id }, req.query)
      // associate user ID with task
      .then(function (dbUser) {
        return db.User.findOneAndUpdate({}, { $push: { user: dbUser._id } }, { new: true });
      })
      // associate client ID with task
      .then(function (dbClient) {
        return db.Client.findOneAndUpdate({}, { $push: { client: dbClient._id } }, { new: true });
      })
      // associate note ID with task
      .then(function (dbNote) {
        return db.Note.findOneAndUpdate({}, { $push: { note: dbNote._id } }, { new: true });
      })
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