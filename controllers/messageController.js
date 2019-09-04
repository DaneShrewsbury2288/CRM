const db = require("../models");
const Message = db.Message;

// Defining methods for the productsController
module.exports = {
    findAll: function (req, res) {
        Message
            .find(req.query)
            .sort({ date: -1 })
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
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};




