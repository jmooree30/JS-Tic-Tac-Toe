const gameboard = (() => {
  board = ["x","o","x","o","x","o","x","o","x"]
  return {board}
})(); 

const Player = (name,piece) => {
 name = name
 piece = piece
 return {name, piece}
};

function grid(){
  for(i=0;i<gameboard.board.length;i++){
    console.log(gameboard.board.length)
    var div = document.createElement('div');
    div.innerHTML=gameboard.board[i]
    div.classList.add("mystyle")
    document.querySelector('.container').appendChild(div);
  }
}

grid()