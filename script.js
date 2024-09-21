/* 1 экран */
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
/* 2 экран */
const secondRight = document.querySelector('.second-right');
secondRight.addEventListener('click', changeScreenTwoRight);
function changeScreenTwoRight(){
    document.querySelector('.screen-2').classList.add('invisible');
    document.querySelector('.screen-3').classList.remove('invisible');
}

const secondLeft = document.querySelector('.second-left');
secondLeft.addEventListener('click', changeScreenTwoLeft);
function changeScreenTwoLeft(){
    document.querySelector('.screen-2').classList.add('invisible');
    document.querySelector('.screen-1').classList.remove('invisible');
}

/* 3 экран */
const thirdRight = document.querySelector('.third-right');
thirdRight.addEventListener('click', changeScreenThreeRight);
function changeScreenThreeRight(){
    document.querySelector('.screen-3').classList.add('invisible');
    document.querySelector('.screen-1').classList.remove('invisible');
}

const thirdLeft = document.querySelector('.third-left');
thirdLeft.addEventListener('click', changeScreenThreeLeft);
function changeScreenThreeLeft(){
    document.querySelector('.screen-3').classList.add('invisible');
    document.querySelector('.screen-2').classList.remove('invisible');
}
/*Song 1*/
const audio1 = document.querySelector('.audio1');
const playBtn1 = document.querySelector('.play-first');
const pauseBtn1 = document.querySelector('.pause-first');
function playAudio1() {
    audio1.currentTime = 0;
    audio1.play();
  }
  function pauseAudio1() {
    audio1.pause();
  }
  
  playBtn1.addEventListener('click', playAudio1);
  pauseBtn1.addEventListener('click', pauseAudio1);
  firstRight.addEventListener('click', pauseAudio1);
  firstLeft.addEventListener('click', pauseAudio1);
  firstRight.addEventListener('click', playAudio2);
  firstLeft.addEventListener('click', playAudio3);

/*Song 2 */
const audio2 = document.querySelector('.audio2');
const playBtn2 = document.querySelector('.play-second');
const pauseBtn2 = document.querySelector('.pause-second');
function playAudio2() {
    audio2.currentTime = 0;
    audio2.play();
  }

  function pauseAudio2() {
    audio2.pause();
}
  playBtn2.addEventListener('click', playAudio2);
  pauseBtn2.addEventListener('click', pauseAudio2);
  secondRight.addEventListener('click', pauseAudio2);
  secondLeft.addEventListener('click', pauseAudio2);
  secondRight.addEventListener('click', playAudio3);
  secondLeft.addEventListener('click', playAudio1);
  

  /* Song 3 */

const audio3 = document.querySelector('.audio3');
const playBtn3 = document.querySelector('.play-third');
const pauseBtn3 = document.querySelector('.pause-third');
function playAudio3() {
    audio3.currentTime = 0;
    audio3.play();
  }
  
  function pauseAudio3() {
    audio3.pause();
  }
  
  playBtn3.addEventListener('click', playAudio3);
  pauseBtn3.addEventListener('click', pauseAudio3);
thirdRight.addEventListener('click', pauseAudio3,);
thirdLeft.addEventListener('click', pauseAudio3);
thirdRight.addEventListener('click', playAudio1,);
thirdLeft.addEventListener('click', playAudio2);
  