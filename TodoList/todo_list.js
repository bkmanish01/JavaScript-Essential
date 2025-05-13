//Declare a variable named taskInput and initialize it
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTask = document.getElementById("clearAllTasks");

//Declare an empty array with a variable named tasks.
let tasks = [];

//Create the addTask function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

//Create the displayTasks function
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

//Create the toggleTask function
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

//Create a clearCompletedTasks function
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

//Create a clearAllTasks function
function clearAllTasks() {
    tasks.splice(0, tasks.length);
    displayTasks();
}

/*Perform addEventListener for addTask and clearCompletedTasks buttons to listen for clicks 
after clicking the Add Task and Clear Completed buttons*/
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTask.addEventListener("click", clearAllTasks);
displayTasks();