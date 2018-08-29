const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },

    task: {
      required: [true, "please input your task"],
      type: String
    },

    done: {
      default: false
    }
  },
  {
    timestamps: true
  }
);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
