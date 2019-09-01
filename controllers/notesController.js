const db = require("../models");
const Note = db.Note;

module.exports = {
    findAll: function (req, res) {
        Note
            .find(req.query)
            .sort({ date: -1 })
            // user notes and when they were created
            .populate("user", "_id created_at")
            // order notes and when they were created
            .populate("order", "_id created_at")
            // client notes and when they were created
            .populate("client", "_id created_at")
            // task notes and when they were created
            .populate("task", "_id created_at")
            .then(dbModel => {
                res.status(200).json({
                    notes: dbModel.map(model => {
                        return {
                            _id: model._id,
                            content: model.content,
                            dateCreated: model.created_at,
                            user: model.user,
                            order: model.order,
                            client: model.client,
                            task: model.task
                        };
                    })
                })
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        Note
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Note
            // defaults to with no orders or users assigned
            .create(req.query)
            // associate user ID with Note
            .then(function (dbUser) {
                return db.User.findOneAndUpdate({}, { $push: { users: dbUser._id } }, { new: true });
            })
            // associate client ID with Note
            .then(function (dbClient) {
                return db.Client.findOneAndUpdate({}, { $push: { clients: dbClient._id } }, { new: true });
            })
            // associate order ID with Note
            .then(function (dbOrder) {
                return db.Order.findOneAndUpdate({}, { $push: { orders: dbOrder._id } }, { new: true });
            })
            // associate task ID with Note
            .then(function (dbTask) {
                return db.Task.findOneAndUpdate({}, { $push: { tasks: dbTask._id } }, { new: true });
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Note
            .findOneAndUpdate({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Note
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};