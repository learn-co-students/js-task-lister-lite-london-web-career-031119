document.addEventListener("DOMContentLoaded", () => {
  const newTodo = document.getElementById("create-task-form");
  const todoList = document.getElementById("tasks");

  newTodo.addEventListener("submit", e => handleSubmit(e, todoList));
});

handleSubmit = (e, todoList) => {
  e.preventDefault();
  let listItem = document.createElement("li");
  listItem.innerHTML = `
    ${e.target["new-task-description"].value}
    <button>X</button>
  `;
  listItem.querySelector("button").addEventListener("click", e => {
    e.target.parentNode.remove();
  });

  todoList.appendChild(listItem);
};
