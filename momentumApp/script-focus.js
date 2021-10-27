let focusContainer = document.getElementById('focus-container');

let newfocusContainer = document.getElementById('new-focus-container');

let newFocusShowCounter = 0;

function newFocus(){

   console.log('The function is called');

   if (newFocusShowCounter == 0) {
      
      newfocusContainer.style.position = "fixed";
      newfocusContainer.style.transform = "scale(1,1)";
      document.getElementById("new-focus-button").textContent = "Hide New Focus";
      console.log("SHOW!");
      newFocusShowCounter = 1;
   
   } else if (newFocusShowCounter == 1) {
      
      newfocusContainer.style.position = "fixed";
      newfocusContainer.style.transform = "scale(1,0)";
      document.getElementById("new-focus-button").textContent = "New Focus";
      console.log("HIDE!");
      newFocusShowCounter = 0;

   }

}

//Script for New focus button
document.getElementById("new-focus-button").addEventListener("click", newFocus);
//End of Script for Add focus button



let setFocusInput = document.getElementById('set-focus-input');
let focusElement = document.getElementById('focus');

function setFocus() {

   if (setFocusInput.value.length != 0) {

      localStorage.setItem('storedFocusKey', JSON.stringify(setFocusInput.value));

      focusElement.textContent = setFocusInput.value;
      
      setFocusInput.value = "";
      setFocusInput.placeholder = "Re-set focus here...";
   }

}

//Script for Add Quote button
document.getElementById("set-focus-button").addEventListener("click", setFocus);
//End of Script for Add Quote button

function showFocus() {

   console.log("showFOcus ran");

   let storedFocusValue = JSON.parse(localStorage.getItem('storedFocusKey'));

   if(storedFocusValue === null) {
      focusElement.textContent = "No Focus Set";
   } else {
      focusElement.textContent = storedFocusValue;
   }

}

window.onload = showFocus();

//Script for Add Quote button
document.getElementById("clear-focus-button").addEventListener("click", clearFocus);
//End of Script for Add Quote button

function clearFocus(){
   localStorage.removeItem('storedFocusKey')
   showFocus()
}
