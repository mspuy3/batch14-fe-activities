let boardStatus = [
   ['','',''],
   ['','',''],
   ['','',''],
]

let boardHistory = [
   [
      ['','',''],
      ['','',''],
      ['','',''],
   ]
];

let boardHistoryViewer = 1;

let winnerSwitch = 0;

let xWins = 0;

let oWins = 0;

let xoTies = 0;


function playerToggler(playingPiece) {
   
      if(playingPiece === 'X') {
         document.querySelector('#currentPlayer').textContent = 'O';
      } else {
         document.querySelector('#currentPlayer').textContent = 'X';
      }
   
}


function boardStatusUpdater(pieceClickedElement, playingPiece){

   boardStatus[pieceClickedElement[1]][pieceClickedElement[3]] = playingPiece;
   
   console.log("This is the current board");
   console.table(boardStatus);

}


function boardHTMLUpdater(chosenBoard) {

   let rowHTML = 0;
   let colHTML = 0;

   chosenBoard.forEach(row => {

      row.forEach(piece => {

         let tileHTML = "r"+ String(rowHTML) +"c"+ String(colHTML);
         let tileContent = document.getElementById(tileHTML);
         tileContent.textContent = piece;
         
         colHTML += 1;});

      rowHTML += 1;
      colHTML -= 3;}
   )

};


function warningToggler(clicked) {
   var element = document.getElementById("warningBanner");

   if (element.classList.contains("warningHide") && clicked === ''){
       console.log("Empty tile! Successful process!");
    }

   else if (element.classList.contains("warningHide") && clicked !== ''){
      console.log("The tile is taken! I'll show the banner");
      element.classList.remove("warningHide"); 
   } 
   
   else if (!element.classList.contains("warningHide") && clicked === ''){
       console.log("Empty tile! I'll remove the banner");
       element.classList.add("warningHide"); 
    }

   else if (!element.classList.contains("warningHide") && clicked !== ''){
      console.log("The tile is taken! I'll retain the banner");
   }       
}


function theChecker(playingPiece, boardStatus) {

   let pieceBoardStatus = [];
   let winningPatterns =[
      [playingPiece, playingPiece, playingPiece, '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', playingPiece, playingPiece, playingPiece, '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', playingPiece, playingPiece, playingPiece],
      [playingPiece, '-', '-', playingPiece, '-', '-', playingPiece, '-', '-'],
      ['-', playingPiece, '-', '-', playingPiece, '-', '-', playingPiece, '-'],
      ['-', '-', playingPiece, '-', '-', playingPiece, '-', '-', playingPiece],
      [playingPiece, '-', '-', '-', playingPiece, '-', '-', '-', playingPiece],
      ['-', '-', playingPiece, '-', playingPiece, '-', playingPiece, '-', '-'],
   ];

   boardStatus.forEach(row =>    
      row.forEach(piece => { 
            if (piece === playingPiece) {
               pieceBoardStatus.push(piece);
            } else {
               pieceBoardStatus.push('');
            }
      })
   )
   
                     console.log("This is the last player's latest board");
                     console.log(pieceBoardStatus);

   winningPatterns.forEach(pattern => {

      let patternCounter = 0;

      pieceBoardStatus.forEach((val, index) => {

         if(val === pattern[index]) {   
            patternCounter += 1;
         }

         if(patternCounter == 3) {
            console.log(playingPiece +" Wins!");
            document.querySelector('#winningPlayer').textContent = playingPiece;
            winnerSwitch = 1;
            
            document.querySelector('.currentPlayerContainer').classList.add("warningHide");
            document.querySelector('.winningPlayerContainer').classList.remove("warningHide");
            
            return  
         }

      })

   })

   let tieChecker = 0; 
   boardStatus.forEach(row => {   
      row.forEach(piece => { 
            if (piece === '') {
               tieChecker += 1;
            }
      })
   })

   if (tieChecker == 0 && winnerSwitch == 0) {
      winnerSwitch = 1;
      document.querySelector('.currentPlayerContainer').classList.add("warningHide");
      document.querySelector('.tieGameContainer').classList.remove("warningHide");
      return
   }

}


function buttonToggler(boardHistory, winnerSwitch) {
   if(winnerSwitch == 1) {
      document.querySelector(".historyBanner").classList.remove("buttonHide");
      document.querySelector("#previousButton").classList.remove("buttonHide");
   } else {return;};
}


function showNextGameButton() {
   if (winnerSwitch == 1) {
      document.querySelector("#nextGameButton").classList.remove("buttonHide");
      document.querySelector("#resetGameButton").classList.add("buttonHide");

      let winningPiece = document.querySelector('#winningPlayer').textContent;

      if(winningPiece == 'X') {
         xWins += 1;
         document.querySelector('#xCounter').textContent = xWins;
      } else if(winningPiece == 'O') {
         oWins += 1;
         document.querySelector('#oCounter').textContent = oWins;
      } else if(winningPiece == '') {
         xoTies += 1;
         document.querySelector('#tieCounter').textContent = xoTies;
      }

   } else if (winnerSwitch == 0 && !document.querySelector("#nextGameButton").classList.add("buttonHide"))  { 
      document.querySelector("#nextGameButton").classList.add("buttonHide");     
   };
}


function myFunction(pieceClicked) {
   if(winnerSwitch == 0){

      let pieceClickedElement = pieceClicked.target.id;
      let playingPiece = document.querySelector('#currentPlayer').textContent;
      let tileChecker = boardStatus[pieceClickedElement[1]][pieceClickedElement[3]];

      if(tileChecker === '') {
      
         console.clear();
      
         warningToggler(tileChecker);

         boardStatusUpdater(pieceClickedElement, playingPiece);

         boardHistory.push(JSON.parse(JSON.stringify(boardStatus)));
         console.log("This is the board history");
         console.log( boardHistory);
      
         document.getElementById(String(pieceClickedElement)).classList.add("player" + playingPiece);
         boardHTMLUpdater(boardHistory[boardHistory.length - 1]);

         theChecker(playingPiece, boardStatus);
         
         playerToggler(playingPiece, winnerSwitch);
         
         buttonToggler(boardHistory, winnerSwitch);

         showNextGameButton();
      

      } else if (tileChecker !== '') {

         warningToggler(tileChecker);

      }; 
   } else {return;};
}


function previousBoard () {
   console.clear();

   document.querySelector("#currentButton").classList.add("buttonHide");
   
   if ( (boardHistory.length - boardHistoryViewer) > 0) {
      boardHistoryViewer += 1;
      let boardHistoryViewed = boardHistory[boardHistory.length - boardHistoryViewer];
      console.log(boardHistory.length - boardHistoryViewer);
      console.log(boardHistory);
      console.log(boardHistoryViewed);
      boardHTMLUpdater(boardHistoryViewed);

      if(boardHistoryViewer == 2){
         document.querySelector("#nextButton").classList.remove("buttonHide");
      };

      if(boardHistoryViewer > 2){
         document.querySelector("#currentButton").classList.remove("buttonHide");
      }

   };  
   
   if ( (boardHistory.length - boardHistoryViewer) == 0) {
      document.querySelector("#previousButton").classList.add("buttonHide");
   };
}


function currentBoard() {
   console.clear();
   boardHTMLUpdater(boardStatus);
   boardHistoryViewer = 1;

   console.log("This is the current board");
   console.table(boardStatus);
   console.log("This is the board history");
   console.table( boardHistory);

   document.querySelector("#nextButton").classList.add("buttonHide");
   document.querySelector("#currentButton").classList.add("buttonHide");
   document.querySelector("#previousButton").classList.remove("buttonHide");
}


function nextBoard () {
   console.clear();
   
   if( boardHistoryViewer > 1 ) {
      boardHistoryViewer -= 1;
      let boardHistoryViewed = boardHistory[boardHistory.length - boardHistoryViewer];
      console.log(boardHistory.length - boardHistoryViewer);
      console.log(boardHistory);
      console.log(boardHistoryViewed);
      boardHTMLUpdater(boardHistoryViewed);
      document.querySelector("#previousButton").classList.remove("buttonHide");
   }  

   if( boardHistoryViewer == 1 ) {
      document.querySelector("#nextButton").classList.add("buttonHide");
      document.querySelector("#currentButton").classList.add("buttonHide");
      document.querySelector("#previousButton").classList.remove("buttonHide");
   }
}


function nextGame() {
   console.clear();

   document.querySelector("#nextGameButton").classList.add("buttonHide");     

   document.querySelector("#resetGameButton").classList.remove("buttonHide");

   document.querySelector(".historyBanner").classList.add("buttonHide");

   document.querySelectorAll(".historyButtons").forEach(button => {
      if(!button.classList.contains("buttonHide")) {
         button.classList.add("buttonHide");
      }
   });

   document.querySelector('.currentPlayerContainer').classList.remove("warningHide");
   document.querySelector('.winningPlayerContainer').classList.add("warningHide");
   document.querySelector('.tieGameContainer').classList.add("warningHide");
   

   document.querySelectorAll('.piece').forEach(piece => {
      piece.classList.remove("playerO");
      piece.classList.remove("playerX");
   })
   
   boardStatus = [
      ['','',''],
      ['','',''],
      ['','',''],
   ]
   
   boardHistory = [
      [
         ['','',''],
         ['','',''],
         ['','',''],
      ]
   ];
   
   boardHistoryViewer = 1;
   
   winnerSwitch = 0; 

   boardHTMLUpdater(boardStatus);

   document.querySelector('#winningPlayer').textContent = '';
}


document.querySelectorAll('.piece').forEach(piece => piece.addEventListener('click', myFunction));

document.querySelector('#previousButton').addEventListener('click',previousBoard);

document.querySelector('#currentButton').addEventListener('click',currentBoard);

document.querySelector('#nextButton').addEventListener('click',nextBoard);

document.querySelector('#nextGameButton').addEventListener('click',nextGame);

document.querySelector('#resetGameButton').addEventListener('click',nextGame);