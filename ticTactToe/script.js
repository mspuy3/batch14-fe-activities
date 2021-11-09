let gameRecord = {
   numberOfGames: 0,
   gameHistory: [],
   xPlayer: "X",
   xPlayerWins: 0,
   xPlayerWonGames:[],
   xPlayer: "X",
   xPlayerWins: 0,
   xPlayerWonGames:[],
};


let boardStatus = [
   ['','',''],
   ['','',''],
   ['','',''],
]

let boardHistory = [];

let boardHistoryViewer = 1;



let boardLatest = boardHistory[boardHistory.length - 1];

let winnerSwitch = 0;




function playerToggler(playingPiece) {
   if(playingPiece === 'X') {
      document.querySelector('#currentPlayer').textContent = 'O';
   } else {
      document.querySelector('#currentPlayer').textContent = 'X';
   }
}




function boardStatusUpdater(pieceClickedElement,playingPiece){
   boardStatus[pieceClickedElement[1]][pieceClickedElement[3]] = playingPiece;
   console.log("This is the current board");
   console.log(boardStatus);
}





function boardHTMLUpdater(chosenBoard){

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
      //  return
       console.log("Empty tile! Successful process!");
    }

   else if (element.classList.contains("warningHide") && clicked !== ''){
      console.log("The tile is taken! I'll show the banner");
      element.classList.remove("warningHide"); 
   } 
   
   else if (!element.classList.contains("warningHide") && clicked === ''){
      //  return
       console.log("Empty tile! I'll remove the banner");
       element.classList.add("warningHide"); 
    }

   else if (!element.classList.contains("warningHide") && clicked !== ''){
   //  return
      console.log("The tile is taken! I'll retain the banner");
   }
       
}





function theChecker(playingPiece, boardStatus) {

   let pieceBoardStatus = [];
   let winningPatterns =[
      [playingPiece, playingPiece, playingPiece, '', '', '', '', '', ''],
      ['', '', '', playingPiece, playingPiece, playingPiece, '', '', ''],
      ['', '', '', '', '', '', playingPiece, playingPiece, playingPiece],
      [playingPiece, '', '', playingPiece, '', '', playingPiece, '', ''],
      ['', playingPiece, '', '', playingPiece, '', '', playingPiece, ''],
      ['', '', playingPiece, '', '', playingPiece, '', '', playingPiece],
      [playingPiece, '', '', '', playingPiece, '', '', '', playingPiece],
      ['', '', playingPiece, '', playingPiece, '', playingPiece, '', ''],
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
   
   // console.log(pieceBoardStatus);

   winningPatterns.forEach(pattern => {
      if(pieceBoardStatus.every((val, index) => val === pattern[index])) {
         console.log(playingPiece +" Wins!");
         winnerSwitch = 1;

         document.querySelector('.playerBanner').textContent = playingPiece + " Wins!";         

      } else {
         return
      }
   })

}





function myFunction(pieceClicked) {

   let pieceClickedElement = pieceClicked.target.id;
   let playingPiece = document.querySelector('#currentPlayer').textContent;

   let tileChecker = boardStatus[pieceClickedElement[1]][pieceClickedElement[3]];

   if(tileChecker === '' && winnerSwitch == 0) {
   
      console.clear();
      // console.log(pieceClicked.target.textContent);
      // console.log(pieceClickedElement);
      // console.log(playingPiece);
      
   
      warningToggler(tileChecker);

      boardStatusUpdater(pieceClickedElement,playingPiece);

      boardHistory.push(JSON.parse(JSON.stringify(boardStatus)));
      console.log("This is the board history");
      console.log( boardHistory);
   
      // document.getElementById(String(pieceClickedElement)).textContent = playingPiece;
      boardHTMLUpdater(boardHistory[boardHistory.length - 1]);


      theChecker(playingPiece, boardStatus);
      // theChecker(playingPiece, boardHistory[boardHistory.length - 1]);
      
      playerToggler(playingPiece);      

   } else {

      warningToggler(tileChecker);

   }


   
}



document.querySelectorAll('.piece').forEach(piece => piece.addEventListener('click', myFunction));




function previousBoard () {
   console.clear();
   
   boardHistoryViewer += 1;
   let boardHistoryViewed = boardHistory[boardHistory.length - boardHistoryViewer];
   console.log(boardHistory.length - boardHistoryViewer);
   console.log(boardHistory);
   console.log(boardHistoryViewed);
   boardHTMLUpdater(boardHistoryViewed);


}

function currentBoard() {
   console.clear();
   boardHTMLUpdater(boardStatus);
   boardHistoryViewer = 1;


   console.log("This is the current board");
   console.log(boardStatus);
   console.log("This is the board history");
   console.log( boardHistory);

   warningToggler('');
}

function nextBoard () {
   console.clear();
   
   boardHistoryViewer -= 1;
   let boardHistoryViewed = boardHistory[boardHistory.length - boardHistoryViewer];
   console.log(boardHistory.length - boardHistoryViewer);
   console.log(boardHistory);
   console.log(boardHistoryViewed);
   boardHTMLUpdater(boardHistoryViewed);



}


document.querySelector('#previousButton').addEventListener('click',previousBoard);

document.querySelector('#currentButton').addEventListener('click',currentBoard);

document.querySelector('#nextButton').addEventListener('click',nextBoard);