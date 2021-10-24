function myFunction1() {
   var x = document.getElementById("collapsible-container");
   if (x.style.transform === "scale(1, 1)") {
     x.style.transform = "scale(1, 0)";
   } else {
     x.style.transform = "scale(1, 1)";
   }
 }

 