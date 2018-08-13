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

    // date: {
    //   required: [true, "please input your date task"],
    //   type: Date
    // },
    status: {
      enum: [true, false],
      default: false,
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
