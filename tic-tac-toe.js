const gameboard = (() => {
  board = ["","","","","","","","",""]
  return {board}
})(); 

const Player = (name,piece) => {
 name = name
 piece = piece
 return {name, piece}
};
player1 = Player("","X")
player2 = Player("","O")

let counter = 2
function grid(){
  for(i=0;i<gameboard.board.length;i++){
    var div = document.createElement('div');
    div.innerHTML=gameboard.board[i]
    div.classList.add("mystyle")
    div.dataset.number = i;
    document.querySelector('.containers').appendChild(div);
  }
  choice(player1,player2)
}

function removeGrid(){
  container = document.querySelector(".containers")
  divs = document.querySelector(".mystyle")
  while(container.hasChildNodes()){
    container.removeChild(container.firstChild)
  }
}

function checkUsed(e){
  return gameboard.board[e.target.dataset.number] != "" ? true : false;
}

function choice(player1, player2){
  playerturn = document.querySelector("p")
  if(counter == 2){playerturn.innerHTML = player1.name + "'s turn"}
    clickables = document.querySelectorAll(".mystyle")
  for(i=0;i<clickables.length;i++){
    clickables[i].addEventListener("click", function(e){
      removeGrid()
      if (checkUsed(e)){alert('nope')}
        else if (counter %2 == 0){
          gameboard.board[e.target.dataset.number] = player1.piece
          playerturn.innerHTML = player2.name + "'s turn"
          counter +=1;
          checkWin(player1.piece,player1.name)
        }
        else{
          gameboard.board[e.target.dataset.number] = player2.piece
          playerturn.innerHTML = player1.name + "'s turn"
          counter +=1;
          checkWin(player2.piece,player2.name)
        }
        grid()
      });
  } 
}

function checkWin(player, playername){
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
      swal({
        title: "Good job!",
        text: playername + " wins!",
        icon: "success",
        button: "New game",
      })
    .then((value) => {
      swal(window.location.reload(true));
    });
    
    win = true 
  }
}
if (!gameboard.board.includes("") && win != true){
  newGame()
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


document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault()
  grids = document.getElementsByClassName("mystyle")
  for(i=0;i<grids.length;i++){
    grids[i].style.display = "inline"
  }
  form = document.querySelector("form")
  form.style.display = "none"
  playerone = document.getElementById("player1").value
  player1.name = playerone
  playertwo = document.getElementById("player2").value
  player2.name = playertwo
  grid()
})