console.log('to działa!');

const userScore_span = document.getElementById('user-score');
const timeLeft_span = document.getElementById('time-left');
const squares_div = document.querySelectorAll('.square');
const addRabitClass = document.querySelector('.add-rabit');
const message = document.querySelector('.message');
const buttonEase = document.getElementById('ease');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');
let userScore = 0;
let hitPosition;
let currentTime = 10;
let timerID = null;
let timerIdRandom = null;
let timerIdRandomHard = null;
let countDownTimerId = null;


buttonEase.addEventListener('click', game);
buttonMedium.addEventListener('click', gameMedium);
buttonHard.addEventListener('click', gameHard);

function randomSquare() {
    squares_div.forEach(square => {
        square.classList.remove('add-rabit');
    })
    let randomPosition = squares_div[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('add-rabit');
    hitPosition = randomPosition.id
};

function randomSquareRandom() {
    squares_div.forEach(square => {
        square.classList.remove('add-random');
    })
    let randomPosition = squares_div[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('add-random');
};

function randomSquareRandomHard() {
    squares_div.forEach(square => {
        square.classList.remove('add-random-hard');
    })
    let randomPosition = squares_div[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('add-random-hard');
};


function moveRabit() {
    timerID = setInterval(randomSquare, 750);
};

function moveRandom() {
    timerIdRandom = setInterval(randomSquareRandom, 750);
};

function moveRandomHard() {
    timerIdRandomHard = setInterval(randomSquareRandomHard, 750);
};

function countDown() {

    currentTime--;
    timeLeft_span.innerHTML = currentTime;
    if (currentTime <= 10) {
        timeLeft_span.style.color = "red";
    }
    if (currentTime == 0) {
        clearInterval(timerID);
        clearInterval(timerIdRandom);
        clearInterval(timerIdRandomHard);
        clearInterval(countDownTimerId);
        currentTime = 60;
        timeLeft_span.innerHTML = currentTime;
        timeLeft_span.style.color = "#fffffe";
        message.classList.add('active');
        message.innerHTML = 'Skończył się czas, ilość złapanych króliczków: ' + userScore;
        setTimeout(function() {
            message.innerHTML = '';
            message.classList.remove('active');
            userScore = 0;
            userScore_span.innerHTML = userScore;
            userScore_span.style.color = "#fffffe";
        }, 3000);
    };
};

function countDownStart() {
    countDownTimerId = setInterval(countDown, 1000);
};


function game() {
    moveRabit();
    countDown();
    countDownStart();
    randomSquare();
    squares_div.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                userScore++;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
            } else {
                userScore--;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
                if (userScore < 0) {
                    userScore_span.style.color = "red";
                } else {
                    userScore_span.style.color = "#fffffe";
                }
            }
        })
    })

}

function gameMedium() {
    moveRabit();
    countDown();
    countDownStart();
    randomSquare();
    randomSquareRandom();
    moveRandom()
    squares_div.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                userScore++;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
            } else {
                userScore--;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
                if (userScore < 0) {
                    userScore_span.style.color = "red";
                } else {
                    userScore_span.style.color = "#fffffe";
                }
            }
        })
    })

}

function gameHard() {
    moveRabit();
    countDown();
    countDownStart();
    randomSquare();
    randomSquareRandom();
    randomSquareRandomHard();
    moveRandom();
    moveRandomHard();
    squares_div.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                userScore++;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
            } else {
                userScore--;
                userScore_span.innerHTML = userScore;
                hitPosition = null;
                if (userScore < 0) {
                    userScore_span.style.color = "red";
                } else {
                    userScore_span.style.color = "#fffffe";
                }
            }
        })
    })

}