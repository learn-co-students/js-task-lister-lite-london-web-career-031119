let taskNumber = 1

document.addEventListener("DOMContentLoaded", () => {
});

function setPriority(task,prio){
  switch(prio){
      case "top":
      task.setAttribute('class','top-priority');
      break;
      case "medium":
      task.setAttribute('class','medium-priority');
      break;
    case "low":
      task.setAttribute('class','low-priority');
      break;
       default:
          task.setAttribute('class','low-priority');
          }	}

function  addTasksWithDeleteButton(toDo) {
  let task = document.createElement(`li`);
  deleteButton = document.createElement(`button`);
  deleteButton.setAttribute('id',`${taskNumber}`)
  task.innerText = toDo;
  tasks.appendChild(task);
  task.appendChild(deleteButton);
  // each time a button is added we ad a listener to it 
  deleteButton.addEventListener("click",e => {
    e.target.parentElement.remove();
    })
  taskNumber ++ 
  return task
  }

const taskForm = document.querySelector(`#create-task-form`);
const tasks = document.querySelector(`#tasks`) ;


document.addEventListener("submit", e => {
  e.preventDefault();
  let input = e.target.querySelector("input[name='new-task-description']").value;
  let priority = e.target.querySelector("select[name='priorities']").value; // our priority value
  e.target.reset();
  let task = addTasksWithDeleteButton(input); // our li element
  setPriority(task,priority);
  });

 
