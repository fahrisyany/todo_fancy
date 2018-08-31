const mongoose = require("mongoose");
const User = require("../models/user");
const Todo = require("../models/todo");

module.exports = {
  createTodo: function(req, res) {
    const { task, done } = req.body;
    Todo.create({
      task,
      done
    })
      .then(task => {
        res.status(200).json({
          msg: "Adding task",
          task
        });
      })
      .catch(err => {
        res.status(500).json({
          msg: err.message
        });
      });
  },

  showTodo(req, res) {
    Todo.find()
      .then(found => {
        res.status(200).json({ msg: "all Task ", found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  editTodo(req, res) {
    let objectId = mongoose.Types.ObjectId;
    const { task, date, status } = req.body;
    Todo.update(
      { _id: objectId(req.params.id) },
      {
        $set: {
          task,
          status
        }
      }
    )
      .then(found => {
        res
          .status(200)
          .json({ msg: `Todo id = ${req.params.id} edited`, found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  deleteTodo(req, res) {
    let objectId = mongoose.Types.ObjectId;
    Todo.deleteOne({ _id: objectId(req.params.id) })
      .then(found => {
        res
          .status(200)
          .json({ msg: `Task id = ${objectId(req.params.id)} deleted` });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },
  getOneTodo(req, res) {
    Todo.findOne({ _id: req.params.id })
      .then(found => {
        res
          .status(200)
          .json({ msg: `Todo id = ${req.params.id} found`, found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};
