let newGame = 0;


function xChosen(){

   let xPlayer = document.querySelector('#xPlayerChose').textContent;
   document.querySelector('#currentPlayer').textContent = xPlayer;

   let elementWelcome = document.querySelector(".welcomeContainer");
   elementWelcome.classList.add("welcomeHide");

   let elementGame = document.querySelector(".gameContainer");
   elementGame.classList.remove("welcomeHide");

}

function oChosen(){

   let oPlayer = document.querySelector('#oPlayerChose').textContent;
   document.querySelector('#currentPlayer').textContent = oPlayer;

   let elementWelcome = document.querySelector(".welcomeContainer");
   elementWelcome.classList.add("welcomeHide");

   let elementGame = document.querySelector(".gameContainer");
   elementGame.classList.remove("welcomeHide");

}


document.querySelector('#xPlayerChose').addEventListener('click',xChosen);

document.querySelector('#oPlayerChose').addEventListener('click',oChosen);

