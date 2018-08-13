const express = require("express");
const router = express.Router();
const {
  createTodo,
  editTodo,
  showTodo,
  deleteTodo
} = require("../controller/todo");

const auth = require("../middleware/authentification");

router.post("/", auth, createTodo);
router.get("/", auth, showTodo);
router.put("/:id", auth, editTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
