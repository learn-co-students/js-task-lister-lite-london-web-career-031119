const form = document.querySelector('form#create-task-form')
form.addEventListener('submit',(e) => {
  e.preventDefault()
  e.stopPropagation()
  renderTask(form.elements[0].value)
  form.reset()
})
const renderTask = task => {
  const ul = document.querySelector('ul#tasks')
  const li = document.createElement('li')
  li.textContent = task
  li.innerHTML += `<button id= 'delete'>X</button>`
  ul.append(li)
  li.addEventListener('click',(e) => {
    if (e.target.id === 'delete') {
      li.remove()
    }
  })
}
