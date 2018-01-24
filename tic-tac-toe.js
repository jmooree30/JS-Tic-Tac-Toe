const gameboard = (() => {
  board = ["","","","","","","","",""]
  return {board}
})(); 

const Player = (name,piece) => {
 name = name
 piece = piece
 return {name, piece}
};

player1 = Player("Jacob","X")
player2 = Player("Vlad","O")
let counter = 2

function grid(){
  for(i=0;i<gameboard.board.length;i++){
    var div = document.createElement('div');
    div.innerHTML=gameboard.board[i]
    div.classList.add("mystyle")
    div.dataset.number = i;
    document.querySelector('.container').appendChild(div);
  }
  choice(player1,player2)
}

function removeGrid(){
  container = document.querySelector(".container")
  divs = document.querySelector(".mystyle")
  while(container.hasChildNodes()){
    container.removeChild(container.firstChild)
  }
}

function checkUsed(e){
  return gameboard.board[e.target.dataset.number] != "" ? true : false;
}

function choice(player1, player2){
  clickables = document.querySelectorAll(".mystyle")
  for(i=0;i<clickables.length;i++){
    clickables[i].addEventListener("click", function(e){
      removeGrid()
      if (checkUsed(e)){alert('nope')}
        else if (counter %2 == 0){
          gameboard.board[e.target.dataset.number] = player1.piece
          counter +=1;
          checkWin(player1.piece)
        }
        else{
          gameboard.board[e.target.dataset.number] = player2.piece
          counter +=1;
          checkWin(player2.piece)
        }
        grid()
      });
  } 
}

function checkWin(player){
  const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];

  for(i=0;i<winConditions.length;i++){
    if (gameboard.board[winConditions[i][0]] == player &&
      gameboard.board[winConditions[i][1]] == player &&
      gameboard.board[winConditions[i][2]] == player){
      alert("You win!")
    break;
  }
}
if (!gameboard.board.includes("")){
  alert("tie game!");
}
}

function newGame(){
  gameboard.board = ["","","","","","","","",""];
  removeGrid();
  grid();
}

restart = document.getElementById("restart")
restart.addEventListener("click",function(){
  newGame()
})

grid()