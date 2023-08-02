const form = document.getElementById("form");
const todoContainer = document.getElementById("todoItems");
const todoText = document.getElementById("todo");
const todoType = document.getElementById("todoType");
const newTaskBtn = document.getElementById("newTask");
const closeBtn = document.getElementById("closeNewTaks");
const newTask = document.getElementById("new-task");
const backdrop = document.getElementById("backdrop");
const taskCount = document.getElementById("task-count");
const date = document.querySelector(".date--box-date");
const day = document.querySelector(".date--day");
const monthYear = document.querySelector(".date--box-year");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

//functions
function renderList() {
  const listLi = todos.map(function (item) {
    return `<li> ${item.title}  <button onClick=deleteItem(${item.id})>Done ?</button></li>  `;
  });

  let alltodos = listLi.reduce((total, curr) => total + curr, "");
  todoContainer.innerHTML = alltodos;

  taskCount.innerText = todos.length;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();

  date.innerText = today.getDate();
  day.innerText = days[today.getDay()];
  monthYear.innerText = today.getFullYear() + "/ 0" + today.getMonth();
}

function deleteItem(id) {
  todos = todos.filter((el) => el.id != id);
  renderList();
  saveOnStorage();
}

function showNewTask() {
  newTask.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}
function hideNewTask() {
  newTask.classList.add("hidden");
  backdrop.classList.add("hidden");
}

//event listners
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (todoText.value == "") return alert("Plese Enter something!");

  let newTodo = {
    id: todos.length + 1,
    title: todoText.value,
    type: todoType.value,
  };

  todos.push(newTodo);
  saveOnStorage();
  todoText.value = "";

  renderList();
});

function saveOnStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

newTaskBtn.addEventListener("click", showNewTask);
closeBtn.addEventListener("click", hideNewTask);
backdrop.addEventListener("click", hideNewTask);

renderList();
