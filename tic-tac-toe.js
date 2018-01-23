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
    var div = document.createElement('div');
    div.innerHTML=gameboard.board[i]
    div.classList.add("mystyle")
    div.dataset.number = i;
    document.querySelector('.container').appendChild(div);
  }
  choice()
}

function removeGrid(){
  container = document.querySelector(".container")
  divs = document.querySelector(".mystyle")
  while(container.hasChildNodes()){
    container.removeChild(container.firstChild)
  }
}

grid()

function choice(){
clickables = document.querySelectorAll(".mystyle")
for(i=0;i<clickables.length;i++){
  clickables[i].addEventListener("click", function(e){
  removeGrid()
  gameboard.board[e.target.dataset.number] = "X"
  grid()
});
} 
}