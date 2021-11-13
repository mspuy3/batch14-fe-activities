function myHover(pieceHovered) {

   let pieceHoveredElement = "#" + String(pieceHovered.target.id);
   let playingPiece = document.querySelector('#currentPlayer').textContent;


   if (playingPiece == 'O') {

      document.querySelector(pieceHoveredElement).classList.add("playerOHover");
      setTimeout(function() {
         document.querySelector(pieceHoveredElement).classList.remove("playerOHover");
       }, 1000);
   } else if (playingPiece == 'X') {

      document.querySelector(pieceHoveredElement).classList.add("playerXHover");
      setTimeout(function() {
         document.querySelector(pieceHoveredElement).classList.remove("playerXHover");
       }, 1000);
   }


} 


document.querySelectorAll('.piece').forEach(piece => piece.addEventListener('mouseover', myHover));