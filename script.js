document.querySelector('.first-right').onclick = function() {changeScreenOneRight()};
function changeScreenOneRight(){
    document.querySelector('.screen-1').classList.add('invisible');
    document.querySelector('.screen-2').classList.remove('invisible');
}
document.querySelector('.first-left').onclick = function() {changeScreenOneLeft()};
function changeScreenOneLeft(){
    document.querySelector('.screen-1').classList.add('invisible');
    document.querySelector('.screen-3').classList.remove('invisible');
}
document.querySelector('.second-right').onclick = function() {changeScreenTwoRight()};
function changeScreenTwoRight(){
    document.querySelector('.screen-2').classList.add('invisible');
    document.querySelector('.screen-3').classList.remove('invisible');
}
document.querySelector('.second-left').onclick = function() {changeScreenTwoLeft()};
function changeScreenTwoLeft(){
    document.querySelector('.screen-2').classList.add('invisible');
    document.querySelector('.screen-1').classList.remove('invisible');
}
document.querySelector('.third-right').onclick = function() {changeScreenThreeRight()};
function changeScreenThreeRight(){
    document.querySelector('.screen-3').classList.add('invisible');
    document.querySelector('.screen-1').classList.remove('invisible');
}
document.querySelector('.third-left').onclick = function() {changeScreenThreeLeft()};
function changeScreenThreeLeft(){
    document.querySelector('.screen-3').classList.add('invisible');
    document.querySelector('.screen-2').classList.remove('invisible');
}

const audio1 = document.getElementById('song-1');
document.querySelect('.play-first').onclick = function(){mySong1()};
function mySong1(){
    audio1.play();
}