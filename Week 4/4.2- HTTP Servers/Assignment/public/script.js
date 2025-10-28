async function fetchTodos() {
  const res = await fetch("/todos");
  const todos = await res.json();

  const list = document.getElementById("todoList");
  list.innerHTML = ""; // clear list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo + " ";
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => deleteTodo(index);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

async function addTodo() {
  const todo = document.getElementById("todoInput").value;
  if (todo.trim() === "") return alert("Please enter a todo");

  await fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo }),
  });

  document.getElementById("todoInput").value = "";
  fetchTodos();
}

async function deleteTodo(index) {
  await fetch(`/todos/${index}`, { method: "DELETE" });
  fetchTodos();
}

// Load todos when page opens
fetchTodos();
