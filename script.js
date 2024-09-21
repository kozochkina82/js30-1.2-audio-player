const firstRight = document.querySelector('.first-right');
firstRight.addEventListener('click', changeScreenOneRight);
function changeScreenOneRight(){
    document.querySelector('.screen-1').classList.add('invisible');
    document.querySelector('.screen-2').classList.remove('invisible');
}

const firstLeft = document.querySelector('.first-left');
firstLeft.addEventListener('click', changeScreenOneLeft);
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

//const audio1 = document.getElementById('song-1');
//document.querySelect('.play-first').onclick = function(){mySong1()};
//function mySong1(){
//    audio1.play();
//}

const audio1 = document.querySelector('.audio1');
const playBtn1 = document.querySelector('.play-first');
const pauseBtn1 = document.querySelector('.pause-first');
function playAudio1() {
    audio1.play();
  }
  
  function pauseAudio1() {
    audio1.pause();
  }
  
  playBtn1.addEventListener('click', playAudio1);
  pauseBtn1.addEventListener('click', pauseAudio1);
  firstRight.addEventListener('click', pauseAudio1);
  firstLeft.addEventListener('click', pauseAudio1);

const audio2 = document.querySelector('.audio2');
const playBtn2 = document.querySelector('.play-second');
const pauseBtn2 = document.querySelector('.pause-second');
function playAudio2() {
    audio2.play();
  }
  
  function pauseAudio2() {
    audio2.pause();
  }
  
  playBtn2.addEventListener('click', playAudio2);
  pauseBtn2.addEventListener('click', pauseAudio2);

const audio3 = document.querySelector('.audio3');
const playBtn3 = document.querySelector('.play-third');
const pauseBtn3 = document.querySelector('.pause-third');
function playAudio3() {
    audio3.play();
  }
  
  function pauseAudio3() {
    audio3.pause();
  }
  
  playBtn3.addEventListener('click', playAudio3);
  pauseBtn3.addEventListener('click', pauseAudio3);
  