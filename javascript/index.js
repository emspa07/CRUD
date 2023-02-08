let form = document.getElementById('form')
let nombreInput = document.getElementById('nombreInput')
let fechaInput = document.getElementById('fechaInput')
let textareaDescrip = document.getElementById ('textareaDescrip')
let message = document.getElementById ('message')
let metas = document.getElementById('metas')
let agregar = document.getElementById ('agregar')

form.addEventListener('submit', (evt)=>{
  evt.preventDefault()
  formValidation()
}) 

let formValidation = ()=>{
  if(nombreInput.value === ""){
    console.log('invalid')
    message.innerHTML = "Todos los campos son obligatorios"
  }
  else{
    console.log('valid')
    message.innerHTML = ""
    acceptData()
    agregar.setAttribute("data-bs-dismiss", "modal")
    agregar.click()


    (() =>{
      agregar.setAttribute("data-bs-dismiss", "")
    })()

  }
}

let data = {}

let acceptData = () => {
  data["text"] = nombreInput.value
  data["date"] = fechaInput.value
  data["description"] = textareaDescrip.value 

  createMetas()
}

let createMetas = ()=>{
  metas.innerHTML += ` <div>
  <span class="task-me">${data.text}</span>
  <span class="date">${data.date}</span> 
  <p>${data.description}</p>
  <span class="opciones">
      <i onClick ="editMeta(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i><i onClick = "deleteMeta(this)" class="fa-solid fa-trash-can"></i>
  </span>
  </div>`

  resetForm();
}

let deleteMeta = (e)=>{  
  e.parentElement.parentElement.remove ()
}

let editMeta = (e)=>{
  let selectedMeta = e.parentElement.parentElement

  nombreInput.value = selectedMeta.children[0].innerHTML
  fechaInput.value = selectedMeta.children[1].innerHTML
  textareaDescrip.value = selectedMeta.children[2].innerHTML

  selectedMeta.remove()
}

let resetForm = () => {
  nombreInput.value = ""
  fechaInput.value = ""
  textareaDescrip.value = ""
}