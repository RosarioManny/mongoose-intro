// models/todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
  });
//Reminder: Models, NOT schemas, contain the functionality to perform CRUD on a MongoDB collection.

// models/todo.js
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;