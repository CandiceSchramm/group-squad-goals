var mongoose = require("mongoose");
const db = require("../models");

var ObjectId = mongoose.Types.ObjectId;

module.exports = {
  findAll: function(req, res) {
    db.Activity
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Activity
      .findById({activityID: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Activity
      .create(req.body)
      .then(dbModel => res.json("okay"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Activity
      .findOneAndUpdate({ activityID: req.params.id }, {$addToSet : {users : new ObjectId(req.body.userID)}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Activity
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};