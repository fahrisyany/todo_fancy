const express = require("express");
const router = express.Router();
const isLogin = require("../helpers/isLogin");

const {
  createTodo,
  editTodo,
  showTodo,
  deleteTodo,
  getOneTodo
} = require("../controllers/todo.js");

router
  .post("/", createTodo)
  .get("/:id",getOneTodo)
  .get("/", showTodo)
  .put("/:id", editTodo)
  .delete("/:id", deleteTodo);


module.exports = router;
