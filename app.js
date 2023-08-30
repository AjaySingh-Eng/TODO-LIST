const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
      <input type="checkbox" class="checkbox">
      <label>${taskText}</label>
      <button class="deleteButton">Delete</button>
    `;
    todoList.appendChild(listItem);
    totalTasks++;
    taskCount.textContent = `Total tasks: ${totalTasks}`;
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.className === "deleteButton") {
    event.target.parentElement.remove();
    totalTasks--;
    taskCount.textContent = `Total tasks: ${totalTasks}`;
  }
});

todoList.addEventListener("change", (event) => {
  if (event.target.className === "checkbox") {
    const label = event.target.nextElementSibling;
    label.style.textDecoration = event.target.checked ? "line-through" : "none";
  }
});
