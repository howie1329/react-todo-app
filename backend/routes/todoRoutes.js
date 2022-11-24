const express = require("express");

const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

//Get All todos
router.get("/", getTodos);

//Delete todo
router.delete("/:id", deleteTodo);

//create todo
router.post("/", createTodo);

//update todo
router.patch("/:id", updateTodo);

module.exports = router;
