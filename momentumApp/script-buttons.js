document.getElementById("hamburger").addEventListener("click", openButtons);

function openButtons() {

   let buttonsContainer = document.getElementById("buttons-container");
   
   if (buttonsContainer.style.opacity == "0") {
      buttonsContainer.style.opacity = "1";
      buttonsContainer.style.transform = "scale(1,1)";
   } else {
      buttonsContainer.style.opacity = "0";
      buttonsContainer.style.transform = "scale(0,1)";
   }

}