const tiles = Array.from(document.querySelectorAll('.tile'));
const player = Array.from(document.querySelector('.display-turn'));
const restButton = Array.from(document.querySelector('.r-button'));
const winner = Array.from(document.querySelector('.winner'))

let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let isGameActive = true;

const wonPlayerX = 'PlayerX_Won';
const wonPlayerY = 'PlayerY_Won';
const gameTie = "Tie";

//win conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const isValid = (tiles)=>{
    if(tiles.innerText==='X' || tiles.innerText ==='O'){
        return false;
    }
    return true;
}

const updateGame = (index) =>{
    board[index]= currentPlayer;
}

