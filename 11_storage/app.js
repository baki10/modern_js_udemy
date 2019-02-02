// set local storage item
// localStorage.setItem('name', 'Baki');
// sessionStorage.setItem('name', 'Goal');

// remove
// localStorage.removeItem('name');

// get
// const name = localStorage.getItem('name');
// console.log(name);

document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
    const task = document.getElementById('task').value;

    let tasks = localStorage.getItem('tasks') === null ? [] :
        JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved.');

    e.preventDefault();
}
