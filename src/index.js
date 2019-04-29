const form = document.getElementById('create-task-form');
const todosList = document.getElementById('tasks');

form.addEventListener('submit', () => {
  event.preventDefault();
  addTask(form["new-task-description"].value);
  event.target.reset();
})

function addTask(text) {
  li = document.createElement('li');
  li.innerHTML = `
  ${text}
  <button id="delete" onclick="this.parentNode.remove()">x</button>
  `;
  todosList.appendChild(li);
}
