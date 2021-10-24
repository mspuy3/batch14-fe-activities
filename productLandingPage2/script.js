
// Select a single element
const x = document.getElementById("gigil-title");
x.innerHTML = "GIGIL!";

//Select and modify multiple elements
const y = document.getElementsByTagName("h2");

for (let i = 0; i < y.length; i++) {
   y[i].style.backgroundColor = "red";
 }

 //
