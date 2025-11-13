// storage.js
let tasks = [];

function taskTemplate(task) {
    return `
        <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
            <span data-action="delete">❎</span>
            <span data-action="complete">✅</span>
        </div>
        </li>`
}

function renderTasks(tasks) {
    //get the element from DOM
    const listElement = document.querySelector("#toDoList");
    listElement.innerHTML = "";
    //loop through tasks array. Tranform (map) each task object into the appropriate HTML to represent a to-do.
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function newTask() {
    //get the value entered into the #toDo input
    const task = document.querySelector("#toDo").value;
    //add it to our array tasks
    tasks.push({detail: task, completed: false});
    saveTasksForCurrentUser()
    //render out the list
    renderTasks(tasks);
}

function removeTask(taskElement) {
    //notice how we are using taskElement instead of document as our starting point?
    //this will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        //(task) => task.detail !== taskElement.querySelector("p").innerText
        (task) => task.detail !== taskElement.querySelector("p").innerText
    );
        taskElement.remove();
         saveTasksForCurrentUser()      
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
   saveTasksForCurrentUser()
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

function setUserName() {
    const name = localStorage.getItem("toDo-user");
    if (name) {
        document .querySelector(".user").innerText = name;
        loadTasksForCurrentUser();
    }
}

function userNameHandler() {
    const name = document.querySelector("#userName").value;
    localStorage.setItem("toDo-user", name);
    setUserName();
}

function setLocalStorage(key, data){
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key){
  const storedValue = localStorage.getItem(key);
  //check to see if we found anything
  if(storedValue){
    return JSON.parse(storedValue);
  }
    //console.log("I guess noothing is there.")
    return [];
}

function getUserTodosKey(){
  const name = localStorage.getItem("toDo-user") || "default";
  return `toDos-${name}`;
}

function saveTasksForCurrentUser(){
  setLocalStorage(getUserTodosKey(), tasks);
}

function loadTasksForCurrentUser() {
  tasks = getLocalStorage(getUserTodosKey());
}

function init() {
  //tasks = getLocalStorage("toDos");
  // render  the initial list of tasks (if any) when the page loads
  loadTasksForCurrentUser()
  renderTasks(tasks);
  setUserName();
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#toDoList").addEventListener("click", manageTasks);
document.querySelector("#returnNameButton").addEventListener("click", userNameHandler);


init();
//need to spice this up a bit. I want to be able to reload the tasks when the username is changed. right now I have to put a new name in and then hit refresh.
//secondly, I want this to not have a username until you put one in, and effectively "log out" when refreshed. 
//this is good for now. I can return and do more later. 