const playBoard = document.querySelector(".play-board");

//Creating the snake food
let foodX, foodY;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}></div>`;
    playBoard.innerHTML = htmlMarkup;
    console.log(htmlMarkup)
}

changeFoodPosition();
initGame();
