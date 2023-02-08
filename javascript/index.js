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
    message.innerHTML = "Todos los campos son obligatorios"
    console.log('invalid')
  }
  else{
    console.log('valid')
    message.innerHTML = ""
    acceptData()
    agregar.setAttribute("data-bs-dismiss", "modal")
    agregar.click()


    (() => {
      agregar.setAttribute("data-bs-dismiss", "")
    })()

  }
}

let data = []

let acceptData = () => {
  data.push({
  text:nombreInput.value,
  date: fechaInput.value,
  description: textareaDescrip.value, 
  })

  localStorage.setItem("data", JSON.stringify(data))
  
  console.log(data)

  createMetas()
}

let createMetas = () => {
  metas.innerHTML = ""
  data.map((x,y)=>{
    return (metas.innerHTML += ` <div id=${y}>
    <span class="task-me">${x.text}</span>
    <span class="date">${x.date}</span> 
    <p>${x.description}</p>
    <span class="opciones">
        <i onClick ="editMeta(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i><i onClick = "deleteMeta(this);createMetas()" class="fa-solid fa-trash-can"></i>
    </span>
    </div>`)
  })

  resetForm();
}

let deleteMeta = (e)=>{  
  e.parentElement.parentElement.remove ()
  data.splice(e.parentElement.parentElement.id, 1)
  localStorage.setItem("data", JSON.stringify(data))
  console.log(data)
}

let editMeta = (e)=>{
  let selectedMeta = e.parentElement.parentElement

  nombreInput.value = selectedMeta.children[0].innerHTML
  fechaInput.value = selectedMeta.children[1].innerHTML
  textareaDescrip.value = selectedMeta.children[2].innerHTML

  deleteMeta(e)
}

let resetForm = () => {
  nombreInput.value = ""
  fechaInput.value = ""
  textareaDescrip.value = ""
}

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  createMetas()
  console.log(data)
}) ()