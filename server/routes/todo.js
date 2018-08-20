const express = require("express");
const router = express.Router();
const auth = require("../helpers/auth");
const isLogin = require("../helpers/isLogin");
const authUser = auth(["User", "Admin"]);

const {
  createTodo,
  editTodo,
  showTodo,
  deleteTodo
} = require("../controllers/todo.js");

router.post("/", isLogin, authUser, createTodo);
router.get("/", isLogin, authUser, showTodo);
router.put("/:id", isLogin, authUser, editTodo);
router.delete("/:id", isLogin, authUser, deleteTodo);

module.exports = router;
