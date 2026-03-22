const addBtn = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list'); // Now targets the <ol>

const colors = ['#e3f2fd', '#f1f8e9', '#fff3e0', '#fce4ec', '#f3e5f5'];

addBtn.addEventListener('click', () => {
    const text = todoInput.value;
    if (text !== "") {
        createTaskCard(text);
        todoInput.value = ""; 
    }
});

function createTaskCard(taskContent) {
    const card = document.createElement('li');
    card.classList.add('task-card');
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('task-info');

    const label = document.createElement('span');
    label.classList.add('task-label');
    label.textContent = "Task Item:"; 

    const content = document.createElement('span');
    content.classList.add('task-text');
    content.textContent = taskContent;

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = 'Delete';

    delBtn.addEventListener('click', () => {
        card.remove();
    });

    infoDiv.appendChild(label);
    infoDiv.appendChild(content);
    card.appendChild(infoDiv);
    card.appendChild(delBtn);

    todoList.appendChild(card);
}