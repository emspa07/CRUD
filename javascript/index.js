let form = document.getElementById('form')
let nombreInput = document.getElementById('nombreInput')
let fechaInput = document.getElementById('fechaInput')
let textareaDescrip = document.getElementById ('textareaDescrip')
let message = document.getElementById ('message')

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
  }
}

let data = {}

let acceptData = () => {
  data["text"] = nombreInput.value
  data["date"] = fechaInput.value
  data["description"] = textareaDescrip.value 

  console.log(data)
}