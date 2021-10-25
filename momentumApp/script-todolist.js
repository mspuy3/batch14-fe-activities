
let todoContainer = document.getElementById('todo-container');

let todoShowCounter = 0;

function showTodo(){

   console.log('The function is called');

   if (todoShowCounter == 0) {
      
      todoContainer.style.position = "relative";
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

const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function (){
 
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse(localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

   showItem()
})

function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');

taskList.forEach((data, index ) => {
   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">x</button>
   </div>
   `
})
itemShow.innerHTML = html;
}

showItem()

function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask(){
   
localStorage.clear()
showItem()
}