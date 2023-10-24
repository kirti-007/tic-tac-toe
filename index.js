var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerX;
var gaeOver = false;

window.onload = function() {
    Game();
}

function Game(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let tile = document.createElement('div');
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            if(i == 0 || i == 1){
                tile.classList.add("horizontal-line");
            }
            if(j == 0 || j == 1){
                tile.classList.add("vertical-line");
            }

            tile.addEventListener('click', setTile);
            document.getElementById("board").append(tile);
        }
    }
}

function setTile(){
    if(gaeOver){
        return;
    }
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

        if(board[r][c] != ' '){
            return;
        }
    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if(currPlayer == playerX){
        currPlayer = playerO;
    } else {
        currPlayer = playerX;
    }

    checkWinner();
}

function checkWinner(){
    // for horizontal
    for(let r = 0; r < 3; r++){
        if(board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
            for (let index = 0; index < 3; index++) {
                let tile = document.getElementById(r.toString() + '-' + index.toString());
                tile.classList.add("winner");
            }
            gaeOver = true;
            return;
        }
    }
    // for vertical
    for(let c = 0; c < 3; c++){
        if(board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' '){
            for (let index = 0; index < 3; index++) {
                let tile = document.getElementById(index.toString() + '-' + c.toString());
                tile.classList.add("winner");
            }
            gaeOver = true;
            return;
        }
    }
    // for diagonal
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
        for (let index = 0; index < 3; index++) {
            let tile = document.getElementById(index.toString() + '-' + index.toString());
            tile.classList.add("winner");
        }
        gaeOver = true;
        return;
    }
     // for anti-diagonal
     if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != ' '){
       
            let tile = document.getElementById("0-2");
            tile.classList.add("winner");
            tile = document.getElementById("1-1");
            tile.classList.add("winner");
            tile = document.getElementById("2-0");
            tile.classList.add("winner");
        
        gaeOver = true;
        return;
    }

   
}