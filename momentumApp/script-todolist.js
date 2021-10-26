
let todoContainer = document.getElementById('todo-container');

let todoShowCounter = 0;

function showTodo(){

   console.log('The function is called');

   if (todoShowCounter == 0) {
      
      todoContainer.style.position = "fixed";
      todoContainer.style.transform = "scale(1,1)";
      document.getElementById("show-todo-button").textContent = "Hide To-Do";
      console.log("SHOW!");
      todoShowCounter = 1;
   
   } else if (todoShowCounter == 1) {
      
      todoContainer.style.position = "fixed";
      todoContainer.style.transform = "scale(0,0)";
      document.getElementById("show-todo-button").textContent = "Show To-Do";
      console.log("HIDE!");
      todoShowCounter = 0;

   }

}

//Script for Show Todo button
document.getElementById("show-todo-button").addEventListener("click", showTodo);
//End of Script for Show Todo button


// Todo core functions

//Call function to show all todos
displayToDo()
//End of call of function to show all todos


//Script for displaying all the todo items from the localStorage to the HTML page
function displayToDo(){

   let storedToDoValues = JSON.parse( localStorage.getItem('storedToDosKey'))
   
         if(storedToDoValues === null){
            toDoItemsDisplayed = []

         }else{
            toDoItemsDisplayed = storedToDoValues;
         }

   let html = '';

   let toDoListContainer = document.getElementById('todo-list-container');

         toDoItemsDisplayed.forEach((data, index) => {
            
            html += `
            <div class="todo-item-container">
            <button class="todo-item-done-button" onClick="doneItem(${index})">✓</button>
            <p class="todo-item" id="item-${index}">${data}</p>
            <button class="todo-item-delete-button" onClick="deleteItem(${index})">x</button>
            </div>
            `
         })

   toDoListContainer.innerHTML = html;

}
//End of script for displaying all the todo items from the localStorage to the HTML page


//Script for adding a todo item in the localStorage
const toDoInput = document.getElementById('todo-input');

const toDoInputButton = document.getElementById('todo-input-button');

toDoInputButton.addEventListener('click', addToDo)

         function addToDo(){
         
            if(toDoInput.value.trim()!=0){
                  let storedToDoValues = JSON.parse( localStorage.getItem('storedToDosKey'))
               if(storedToDoValues === null){
                  toDoItemsDisplayed = []
               }else{
                  toDoItemsDisplayed = storedToDoValues;
               }
               toDoItemsDisplayed.push(toDoInput.value)
               localStorage.setItem('storedToDosKey', JSON.stringify(toDoItemsDisplayed)); 
            }
            
            toDoInput.value = "";

            displayToDo()

         }
//End of script for adding a todo item in the localStorage


// Script to strike-through clicked todo item
// let toDoListContainer = document.querySelector('ul');

// let toDoListContainer = document.getElementsByClassName('todo-item');

// toDoListContainer.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'p') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// End of script to strike-through clicked todo item


function doneItem(index){

 let doneItem = document.getElementById('item-' + String(index));
 doneItem.classList.toggle('checked');

}

//Script for removing a todo item in the localStorage
function deleteItem(index){

   toDoItemsDisplayed.splice(index, 1)
   localStorage.setItem('storedToDosKey', JSON.stringify(toDoItemsDisplayed));
   
   displayToDo()

}
//End of script for removing a todo item in the localStorage



//script for clearing the key-value pair of the todo items in the local storage
const toDoClearButton = document.getElementById('todo-clear-button');

toDoClearButton.addEventListener('click', clearToDo) 

         function clearToDo(){
            localStorage.removeItem('storedToDosKey')
            displayToDo()
         }
//End of Script for clearing the key-value pair of the todo items in the local storage