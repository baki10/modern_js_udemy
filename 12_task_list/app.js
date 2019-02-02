// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', loadTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

function addTask(event) {
  if (taskInput.value === '') {
    alert('Add a task');
    return;
  }
  appendTask(taskInput.value);
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = '';

  event.preventDefault();
}

function removeTask(event) {
  if (event.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      const li = event.target.parentElement.parentElement;
      li.remove();
      removeTaskFromLocalStorage(li);
    }
  }
}

function clearTasks() {
  // Slower
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();
}

function filterTasks(event) {
  const text = event.target.value.toLowerCase();
  // console.log(text);
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    const isMatched = item.toLowerCase().indexOf(text) != -1;
    task.style.display = isMatched ? 'block' : 'none';
  });
}

function appendTask(task) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  updateTasksInLocalStorage(tasks);
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(function (task) {
    appendTask(task);
  })
}

function removeTaskFromLocalStorage(li) {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(function (task, index) {
    if (li.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  updateTasksInLocalStorage(tasks);
}

function clearTasksFromLocalStorage() {
  localStorage.removeItem('tasks');
}

function getTasksFromLocalStorage() {
  return localStorage.getItem('tasks') === null ? [] :
    JSON.parse(localStorage.getItem('tasks'))
}

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}