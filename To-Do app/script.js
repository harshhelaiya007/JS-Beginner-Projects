// Getting Btn and Text through DOM
const text = document.getElementById("text");
const addTaskBtn = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

// Empty Array to save Task
let toDoArray = [];

// On btn Click Text push in array and show
addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    toDoArray = [];
  } else {
    toDoArray = JSON.parse(todo);
  }
  toDoArray.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(toDoArray));
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    toDoArray = [];
  } else {
    toDoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  toDoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
   <p class='w-full text-grey-darkest'>${list}</p>
   <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
   <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
</div>`;
  });
  //   console.log(htmlCode);
  listBox.innerHTML = htmlCode;
}

// function populateList(data, index) {
//   let listHTML = `<div class='flex mb-4 items-center'>
//    <p class='w-full text-grey-darkest'>${data}</p>
//    <button onclick='edit(${index})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
//    <button onclick='deleteTodo(${index})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
// </div>`;
//   return listHTML;
// }

// Delete TODO
function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  toDoArray = JSON.parse(todo);
  toDoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(toDoArray));
  displayTodo();
}

// Edit TODO
function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  toDoArray = JSON.parse(todo);
  text.value = toDoArray[ind];
  addTaskBtn.style.display = "none";
  saveTaskButton.style.display = "block";
}

// Edit Button Save Changes
saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  toDoArray = JSON.parse(todo);
  let id = saveInd.value;
  toDoArray[id] = text.value;
  addTaskBtn.style.display = "block";
  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(toDoArray));
  displayTodo();
});
