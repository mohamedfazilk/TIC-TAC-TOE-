import Game from "./Game.js"
import GameView from "./GameView.js"

let game =  new Game()
let gameview = new GameView()
// gameview.updateBoard(game);

document.querySelector(".button").addEventListener("click", () => {
    
    restartClick()
})

let tiles = document.querySelectorAll(".board-title")
tiles.forEach((tile)=> {
    tile.addEventListener("click", () =>{
        OnTileClick(tile.dataset.index);    
    })
})

function OnTileClick(i){
    game.makeMove(i)
    game.nextTurn()
    gameview.updateBoard(game);

    
}

function  restartClick(){
       game=  new Game();
       gameview.updateBoard(game)
}


gameview.updateBoard(game);