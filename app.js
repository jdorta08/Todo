//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const deleteButton = document.querySelector(".trash-btn");

//events
todoButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", removeTodo);

//functions
function addTodo(event) {
  //prevent form submission
  event.preventDefault();

  //creating todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //completed button element
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);
  //trash button element
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
}

//remove todo funtion
function removeTodo() {
  console.log("deleted");
}
