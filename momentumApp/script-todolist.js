
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



var todoListItems = document.getElementsByTagName("LI");

for (let i = 0; i < todoListItems.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todoListItems[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("todo-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}