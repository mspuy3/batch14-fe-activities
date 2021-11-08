let boardStatus = [
   ['','',''],
   ['','',''],
   ['','',''],
]

let boardHistory = [];

let winnerSwitch = 0;




function playerToggler(playingPiece) {
   if(playingPiece === 'X') {
      document.querySelector('#currentPlayer').textContent = 'O';
   } else {
      document.querySelector('#currentPlayer').textContent = 'X';
   }
}




function boardUpdater(pieceClickedElement,playingPiece){
   boardStatus[pieceClickedElement[1]][pieceClickedElement[3]] = playingPiece;
   console.log(boardStatus);
}





function warningToggler(clicked) {
   var element = document.getElementById("warningBanner");

   if (element.classList.contains("warningHide") && clicked === ''){
      return
   }

   else if (element.classList.contains("warningHide") && clicked !== ''){
      console.log("The tile is taken!");
      
   } 
   
   else if (element.classList.contains("") && clicked !== '') {
      element.classList.toggle("warningHide");
      console.log("The tile is taken!");
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

   pieceClickedElement = pieceClicked.target.id;
   let playingPiece = document.querySelector('#currentPlayer').textContent;

   if(pieceClicked.target.textContent === '' && winnerSwitch == 0) {
   
      // console.log(pieceClicked.target.textContent);
      // console.log(pieceClickedElement);
      // console.log(playingPiece);
      
      boardUpdater(pieceClickedElement,playingPiece);

      boardHistory.push(JSON.parse(JSON.stringify(boardStatus)));
      console.log(boardHistory);
   
      document.getElementById(String(pieceClickedElement)).textContent = playingPiece;
   
      playerToggler(playingPiece);

      theChecker(playingPiece, boardStatus);
      
      warningToggler(pieceClicked.target.textContent);

   } else {

      warningToggler(pieceClicked.target.textContent);

   }


   
}



document.querySelectorAll('.piece').forEach(piece => piece.addEventListener('click', myFunction));