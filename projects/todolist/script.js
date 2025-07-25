document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addtskbtn = document.getElementById("add-tsk-btn");
  const todolist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render saved tasks
  tasks.forEach((task) => renderTask(task));

  // Add task button click
  addtskbtn.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; // Clear input
  });

  // Function to render a single task
  function renderTask(task) {
    const li = document.createElement("li");
    li.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      li.remove();
    });

    li.appendChild(deleteBtn);
    todolist.appendChild(li);
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
