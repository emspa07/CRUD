let form = document.getElementById('form')
let nombreInput = document.getElementById('nombreInput')
let message = document.getElementById ('message')

form.addEventListener('submit', (evt)=>{
  evt.preventDefault()
  formValidation()
}) 

let formValidation = ()=>{
  if(nombreInput.value === ""){
    console.log('invalid')
    message.innerHTML = "Tienes que ponerle un nombre a tu meta"
  }
  else{
    console.log('valid')
    message.innerHTML = ""
  }
}