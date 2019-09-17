const db = require("../models");
const Message = db.Message;

// Defining methods for the productsController
module.exports = {
    findAll: function (req, res) {
        Message
            .find(req.query)
            .sort({ created_at: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMessages: function (req, res) {
        const users = req.params.userIds.split("&")
        const user = users[0]
        const partner = users[1]
        Message
            .find({
                $or: [
                    { $and: [{ sender: user }, { receiver: partner }] },
                    { $and: [{ sender: partner }, { receiver: user }] }
                ]
            })
            .sort({ created_at: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findUnread: function (req, res) {
        Message
            .find({
                $and: [
                    { read: false },
                    { receiver: req.params.id }
                ]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findTheseUnread: function (req, res) {
        const users = req.params.userIds.split("&")
        const user = users[0]
        const partner = users[1]
        Message
            .find({
                $and: [
                    { read: false },
                    { sender: partner },
                    { receiver: user }
                ]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    markAsRead: function (req, res) {
        const users = req.params.userIds.split("&")
        const user = users[0]
        const partner = users[1]
        Message
            .update({
                $and: [
                    { read: false },
                    { receiver: user },
                    { sender: partner }
                ]
            }, {$set:{read: true}}, {multi: true},
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Message
          .deleteMany({ read: false })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        }
};




