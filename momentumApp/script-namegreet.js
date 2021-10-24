
let nameInputContainer = document.getElementById('name-input-container');
let pageContainer = document.getElementById('page-container');

let opacityEffect = document.getElementsByClassName('opacity-effect');

let nameInput = document.getElementById('name-input');

let nameElement = document.getElementById('name');


function hidePage() {
   pageContainer.style.transform = "scale(1,0)";
   nameInputContainer.style.transform = "scale(1,1)";
   
   for( let i=0; i < opacityEffect.length; i++){
      opacityEffect[i].style.opacity = "0";
   }

}

function displayPage() {
   
   if (nameInput.value.length != 0) {

      nameElement.textContent = nameInput.value;
      pageContainer.style.transform = "scale(1,1)";
      nameInputContainer.style.transform = "scale(1,0)";

      for( let i=0; i < opacityEffect.length; i++){
         opacityEffect[i].style.opacity = "1";
      }
   
   } else {
      nameInput.placeholder = "Add your name first...";
   }

}


//Script to hide page first
window.onload = hidePage();
//End of Script to hide page first


//Script for Name Input button
document.getElementById("name-input-button").addEventListener("click", displayPage);
//End of Script for Name Input button