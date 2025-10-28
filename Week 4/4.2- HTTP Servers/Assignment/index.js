const express = require("express");
const fs = require("fs"); // used to read/write files
const app = express();

app.use(express.json());
app.use(express.static("public")); // serve frontend files

const FILE_PATH = "todos.json";

// function to load todos from file
function loadTodos() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return []; // if file doesn't exist yet
  }
}

// function to save todos to file
function saveTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// get all todos
app.get("/todos", (req, res) => {
  const todos = loadTodos();
  res.json(todos);
});

// add a new todo
app.post("/todos", (req, res) => {
  const todos = loadTodos();
  todos.push(req.body.todo);
  saveTodos(todos);
  res.json({ message: "Todo added!", todos });
});

// delete a todo by index
app.delete("/todos/:index", (req, res) => {
  const todos = loadTodos();
  const index = parseInt(req.params.index);

  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    saveTodos(todos);
    res.json({ message: "Todo deleted!", todos });
  } else {
    res.status(400).json({ message: "Invalid index" });
  }
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
