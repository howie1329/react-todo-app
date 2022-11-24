const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

//get all todos
const getTodos = async (req, res) => {
  const todo = await Todo.find({}).sort({ createAt: -1 });

  res.status(200).json(todo);
};

//Create A Todo
const createTodo = async (req, res) => {
  const { title, body } = req.body;

  try {
    const todo = await Todo.create({
      title,
      body,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Todo

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No Such todo" });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ error: "No Such todo" });
  }

  res.status(200).json(todo);
};

//update todo

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No Such todo" });
  }

  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!todo) {
    return res.status(404).json({ error: "No Such todo" });
  }

  res.status(200).json(todo);
};

module.exports = { createTodo, updateTodo, deleteTodo, getTodos };
