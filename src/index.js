document.addEventListener("DOMContentLoaded", () => {
  // your code here

const formEl = document.querySelector('#create-task-form')

const taskEl = document.querySelector('#tasks')

formEl.addEventListener('submit' , (event)=>{
  event.preventDefault()
  
  const liEl = document.createElement('li')
  const dateLi = document.createElement('li')

  const newTask = formEl["new-task-description"].value
  const dateEl = formEl["date"].value

  liEl.innerText = newTask  + " " + dateEl
  // dateLi.innerText = dateEl
  
	
  taskEl.append(liEl)
  
  formEl.reset()

	
	
	
})
  
});

// const formEl = document.querySelector('#create-task-form')

// const taskEl = document.querySelector('#tasks')

// formEl.addEventListener('submit' , (event)=>{
//   event.preventDefault()
  
//   const liEl = document.createElement('li')
//   const dateLi = document.createElement('li')

//   const newTask = formEl["new-task-description"].value
//   const dateEl = formEl["date"].value

//   liEl.innerText = newTask  + " " + dateEl
//   // dateLi.innerText = dateEl
  
	
//   taskEl.append(liEl)
  
//   formEl.reset()

	
	
	
// })
