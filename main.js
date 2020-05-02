let emptyTile = document.getElementById('16');
let puzzleBoard = document.getElementById('puzzle-board');
const scramble = document.getElementById('scramble');
function exchangeElements(element1, element2) {
    let clonedElement1 = element1.cloneNode(true);
    let clonedElement2 = element2.cloneNode(true);
    puzzleBoard.replaceChild(clonedElement1, element2);
    puzzleBoard.replaceChild(clonedElement2, element1);
}

document.addEventListener('click', function(event) {
  emptyTile = document.getElementById('16');

  if (event.target.parentNode == puzzleBoard && emptyTile != event.target) {
    exchangeElements(emptyTile, event.target);
  }
});

scramble.addEventListener('click', function() {
  const tiles = [];
  let index = 0;
  for (let i = 1; i < 16; i++) {
    tiles[index] = document.getElementById(i);
    index++;
  }
  
  puzzleBoard.innerHTML = ''; 
  
  while (tiles.length > 0) {
    let randomNum = Math.floor(Math.random() * tiles.length);
    puzzleBoard.appendChild(tiles[randomNum]);
    tiles.splice(randomNum, 1);
  }
  
  puzzleBoard.appendChild(emptyTile);
});
