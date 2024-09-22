


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
const button1 = document.querySelector('.button1');
function playStop1() {
  button1.classList.toggle('pause');
}
button1.addEventListener('click', playStop1);

// progressEl1 
const progressEl1 = document.querySelector('#input1');
let mouseDownOnSlider1 = false;

const audio1 = document.querySelector('.audio1');
let isPlaying1 = false;
function playAudio1toggle1() {
    audio1.currentTime = 0;
    isPlaying1 ? audio1.pause() : audio1.play();
}
audio1.onplaying = function() {
  isPlaying1 = true;
};
audio1.onpause = function() {
  isPlaying1 = false;
};
button1.addEventListener('click', playAudio1toggle1);
/*progress bar*/
audio1.addEventListener('loadeddata', () => {
  progressEl1.value = 0;
});
audio1.addEventListener('timeupdate', () => {
  if (!mouseDownOnSlider1) {
    progressEl1.value = audio1.currentTime / audio1.duration * 100;
  }
});
progressEl1.addEventListener('change', () => {
  const pct1 = progressEl1.value / 100;
  audio1.currentTime = (audio1.duration || 0) * pct1;
});
progressEl1.addEventListener('mousedown', () => {
  mouseDownOnSlider1 = true;
});
progressEl1.addEventListener('mouseup', () => {
  mouseDownOnSlider1 = false;
});

function playAudio1() {
    audio1.currentTime = 0;
    audio1.play();
    button1.classList.add('pause')
  }
  function pauseAudio1() {
    audio1.pause();
  }
  
  firstRight.addEventListener('click', pauseAudio1);
  firstLeft.addEventListener('click', pauseAudio1);
  firstRight.addEventListener('click', playAudio2);
  firstLeft.addEventListener('click', playAudio3);



/*Song 2 */

const button2 = document.querySelector('.button2');
function playStop2() {
  button2.classList.toggle('pause');
}
button2.addEventListener('click', playStop2);

const progressEl2 = document.querySelector('#input2');
let mouseDownOnSlider2 = false;

const audio2 = document.querySelector('.audio2');
let isPlaying2 = false;
function playAudio1toggle2() {
    audio2.currentTime = 0;
    isPlaying2 ? audio2.pause() : audio2.play();
}
audio2.onplaying = function() {
  isPlaying2 = true;
};
audio2.onpause = function() {
  isPlaying2 = false;
};
button2.addEventListener('click', playAudio1toggle2);

/*progress bar*/
audio2.addEventListener('loadeddata', () => {
  progressEl2.value = 0;
});
audio2.addEventListener('timeupdate', () => {
  if (!mouseDownOnSlider2) {
    progressEl2.value = audio2.currentTime / audio2.duration * 100;
  }
});
progressEl2.addEventListener('change', () => {
  const pct2 = progressEl2.value / 100;
  audio2.currentTime = (audio2.duration || 0) * pct2;
});
progressEl2.addEventListener('mousedown', () => {
  mouseDownOnSlider2 = true;
});
progressEl2.addEventListener('mouseup', () => {
  mouseDownOnSlider2 = false;
});

function playAudio2() {
  audio2.currentTime = 0;
  audio2.play();
  button2.classList.add('pause')
}
function pauseAudio2() {
  audio2.pause();
}

secondRight.addEventListener('click', pauseAudio2);
secondLeft.addEventListener('click', pauseAudio2);
secondRight.addEventListener('click', playAudio3);
secondLeft.addEventListener('click', playAudio1);
 
  /* Song 3 */

  const button3 = document.querySelector('.button3');
  function playStop3() {
    button3.classList.toggle('pause');
  }
  button3.addEventListener('click', playStop3);

  const progressEl3 = document.querySelector('#input3');
  let mouseDownOnSlider3 = false; 
  
  const audio3 = document.querySelector('.audio3');
  let isPlaying3 = false;
  function playAudio1toggle3() {
      audio3.currentTime = 0;
      isPlaying3 ? audio3.pause() : audio3.play();
  }
  audio3.onplaying = function() {
    isPlaying3 = true;
  };
  audio3.onpause = function() {
    isPlaying3 = false;
  };
  button3.addEventListener('click', playAudio1toggle3);

  /*progress bar*/
audio3.addEventListener('loadeddata', () => {
  progressEl3.value = 0;
});
audio3.addEventListener('timeupdate', () => {
  if (!mouseDownOnSlider3) {
    progressEl3.value = audio3.currentTime / audio3.duration * 100;
  }
});
progressEl3.addEventListener('change', () => {
  const pct3 = progressEl3.value / 100;
  audio3.currentTime = (audio3.duration || 0) * pct3;
});
progressEl3.addEventListener('mousedown', () => {
  mouseDownOnSlider3 = true;
});
progressEl3.addEventListener('mouseup', () => {
  mouseDownOnSlider3 = false;
});
  
  function playAudio3() {
    audio3.currentTime = 0;
    audio3.play();
    button3.classList.add('pause')
  }
  function pauseAudio3() {
    audio3.pause();
  }
  
  thirdRight.addEventListener('click', pauseAudio3);
  thirdLeft.addEventListener('click', pauseAudio3);
  thirdRight.addEventListener('click', playAudio1);
thirdLeft.addEventListener('click', playAudio2);
 