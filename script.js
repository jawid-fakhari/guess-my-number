'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const number = document.querySelector('.number');

const message = document.querySelector('.message');

const labelScore = document.querySelector('.score');
const lastHighScore = document.querySelector('.highscore');



/*functions*/
//random number
let randNumb = Math.trunc((Math.random() * 20) + 1);


//score calculation
let score = 20;
const calcScore = function(){
    if(score > 1){
        score--;
        labelScore.textContent = score;
    }else {
        message.textContent = 'Game-Over!';
    }
}
//high score save
let highScore = 0;
const checkHighScore = function(){  
    if(score > highScore){
        highScore = score;
        lastHighScore.textContent = highScore;
    }
}
//check click function
const checkFunction = function () {
    const guessNumber = Number(document.querySelector('.guess').value);//capire perchè non al di fuori func non funziona?

    if (!guessNumber) { //capire numero zero??
        message.textContent = 'No number!';
    } else if (guessNumber <= 0 || guessNumber > 20) {
        message.textContent = 'Choose a number between 1 and 20!';
    } else if (guessNumber === randNumb) {
        message.textContent = 'Correct Number!';
        number.textContent = guessNumber;
        document.body.classList.add("winnerBack");
        checkHighScore(score);
    } else if (guessNumber < randNumb) {
        message.textContent = 'Too Low!';
        calcScore();
    } else if (guessNumber > randNumb) {
        message.textContent = 'Too High!';
        calcScore();
    }
}

//Again click function
const againFunction = function(){
    score = 20;
    randNumb = Math.floor((Math.random() * 20) + 1);
    
    message.textContent = 'Start guessing...';
    labelScore.textContent = score;
    number.textContent = '?';
    
    document.body.classList.remove("winnerBack");
    document.querySelector('.guess').value = '';
}


//add event listenere for btn check
btnCheck.addEventListener('click', checkFunction);
btnAgain.addEventListener('click', againFunction)