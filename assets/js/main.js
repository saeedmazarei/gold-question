const startButton = document.getElementById('start-button');
const startLanding = document.getElementById('start-landing');
const showLanding = document.getElementById('show-landing');
const score = document.querySelectorAll('.score');
const wrongButton = document.querySelectorAll('.wrong-answer');
const rightButton = document.querySelectorAll('.right-answer');
const claming = document.querySelectorAll('.get-reward');
const blueGift = document.querySelectorAll('.blue');
const goldGift = document.querySelectorAll('.gold');
const greenGift = document.querySelectorAll('.green');
const minOn = document.querySelectorAll('.min-on');
const minOff = document.querySelectorAll('.min-off');
const rightNumber = document.getElementById('right-answer');
const wrongNumber = document.getElementById('wrong-answer');
const retry = document.querySelector('.retry');
const retryPopUp = document.getElementById('retry-container');
const closeButton = document.getElementById('close');
let rightAnswer = 15;
let wrongAnswer = 3;
let claimed = [0, 0, 0, 0, 0];
let question = 15;
rightNumber.innerHTML = rightAnswer;
wrongNumber.innerHTML = wrongAnswer;


// when click on start button show landing
startButton.addEventListener('click', showLand);

// function that show landing
function showLand() {
    startLanding.classList.add('deactive');
    showLanding.classList.remove('deactive');
}

// fill progress bar function
function progressBar() {
    for(let i=0; i < rightAnswer; i++) {
        score[i].classList.add('active');
    }
}

// min function
function minbox() {
    let min = Math.floor((question + 5) / 5);
    for(let i = 0; i < min; i++){
        minOnFun(i);
    }
}

// min on function
function minOnFun(i) {
    minOff[i].classList.add('deactive');
    minOn[i].classList.remove('deactive');
}

// call min function
minbox();

// call progress bar
progressBar();

// show wrong answer function
function wrong() {
    for(let i=0; i < wrongAnswer; i++) {
        wrongButton[i].classList.remove('deactive');
        rightButton[i].classList.add('deactive');
        if(wrongAnswer >= 3) {
            retry.classList.remove('deactive');
        }
    }
}

// call wrong answer function
wrong();

// popup section
function showHidePop() {
    retry.addEventListener('click', showRetry);
    closeButton.addEventListener('click', hideRetry);
    window.onclick = function(event) {
        if (event.target == retryPopUp) {
        retryPopUp.style.display = "none";
        }
    }
}

showHidePop();

// show retry popup
function showRetry() {
    retryPopUp.style.display = 'block';
}

// hide retry popup
function hideRetry() {
    retryPopUp.style.display = 'none';
}

// show reward function
function gift() {
    let rewards = Math.floor(rightAnswer / 5);
    for(let i = 0; i < rewards; i++) {
        if(claimed[i] == 0){
            blueGift[i].classList.add('deactive');
            goldGift[i].classList.remove('deactive');
            // claming[i].classList.remove('deactive');
        }
        else claim(i);
    }
}

// call show reward
gift();

// claim gift function
function claim(i) {
    greenGift[i].classList.remove('deactive');
    blueGift[i].classList.add('deactive');
    goldGift[i].classList.add('deactive');
}