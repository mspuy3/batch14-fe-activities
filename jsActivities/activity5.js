const robot = document.querySelector('.robot')
 
//Challenge: Make Eve move when you click its body.
 
let moved = 0;

function moveRobot() {
   
   moved+=100;

   robot.style.left = String(moved)+"px";

}


robot.addEventListener('click', moveRobot)