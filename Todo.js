const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('Task-Lists');

addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (!task) return alert('Enter a task');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${task} <button class="delete-btn">X</button>`;
    listItem.addEventListener('click', () => listItem.classList.toggle('completed'));
    listItem.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        listItem.remove();
    });
    taskList.appendChild(listItem);
    taskInput.value = '';
});