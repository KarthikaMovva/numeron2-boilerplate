// Iteration 8: Making scoreboard functional
let displayscore = document.getElementById('score-board');;
displayscore.innerText = localStorage.getItem('score');

let playmorebtn = document.getElementById('play-again-button');
playmorebtn.addEventListener('click',function(){
    window.location.href='./game.html';
});