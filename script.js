let detect_thebutton = document.getElementById("buttonform"); //detecter le button
let detect_the2button =document.getElementById('buttonForm2')
let formulair = document.getElementById('containerFormulair');

let detect_submit = document.getElementById('submitbutton')
let message = document.getElementById('messageEnvoyer')

let buttonFermer = document.getElementById('close_the_form')

detect_thebutton.addEventListener('click', function afficherLeFormulaire (){
 
  formulair.style.display = "block";
 });
 detect_the2button.addEventListener('click', function afficherLeFormulaire (){
 
  formulair.style.display = "block";
 });

 
 detect_submit.addEventListener('click', function afficheLeMessage (event){
  event.preventDefault()
  const isvalidform =validateForm()
  if (isvalidform== true) {
    formulair.style.display = 'none'
  message.style.display = "block"
  setTimeout(function () {
    message.style.display = "none";
  }, 5000) 
  }
 } ) ;

 buttonFermer.addEventListener('click', function fermerLeFormulair (){

  formulair.style.display = 'none';
 });
 
 function validateForm() {
 let inputname = document.getElementById('inputname');
 let email = document.getElementById('email');
 let errorMessage = document.getElementById('error-message');

 if (inputname.value.trim() === '' || email.value.trim() === '') {
  errorMessage.innerHTML = '<b><p>Name and email are required!</p>';
  return false; 

} else{
  return true
}

errorMessage.textContent = '';
return true; 
}
 