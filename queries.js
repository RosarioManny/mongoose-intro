/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const Todo = require('./models/todo.js')
// vvvv This is in the todo.js file vvvv
// const todoSchema = new mongoose.Schema({
//     text: String,
//     isComplete: Boolean,
// });
const createTodo = async () => {

  const todoData = [{
    text: "Learn JS",
    isComplete: false,node
  },
  {
    text: "Jazz",
    isComplete: false,
  },
  {
    text: "The Declaration of Independence is complete!",
    isComplete: true
  }
]
  
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

// const Todo = mongoose.model('Todo', todoSchema)

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.');  
  // The functions calls to run queries in our db will go here as we write them.
  // await createTodo();
  const todos = await Todo.find({})
  // console.log(todos)
  const todoById = await Todo.findById({})
};

connect()
/*------------------------------ Query Functions -----------------------------*/
