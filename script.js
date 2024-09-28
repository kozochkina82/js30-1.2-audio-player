/* Переключение между экранами */
function changeScreen(fromScreen, toScreen, pauseAudio, playAudio, buttonToUpdate) {
  document.querySelector(fromScreen).classList.add('invisible'); // Скрыть предыдущий экран
  document.querySelector(toScreen).classList.remove('invisible'); // Показать новый экран
  pauseAllAudios(); // Останавливаем все аудио
  playAudio(); // Запускаем нужное аудио
  updatePlayPauseButton(buttonToUpdate); // Обновляем вид кнопки Play/Pause
}

function pauseAllAudios() {
  pauseAudio1();
  pauseAudio2();
  pauseAudio3();
}

/* Обновление кнопки Play/Pause в зависимости от состояния аудио */
function updatePlayPauseButton(button, audio) {
  if (audio.paused) {
    button.classList.remove('pause'); // Если музыка на паузе, убрать класс 'pause'
  } else {
    button.classList.add('pause'); // Если музыка играет, добавить класс 'pause'
  }
}

/* 1 экран */
const firstRight = document.querySelector('.first-right');
firstRight.addEventListener('click', () => {
  changeScreen('.screen-1', '.screen-2', pauseAudio1, playAudio2, button2);
});

const firstLeft = document.querySelector('.first-left');
firstLeft.addEventListener('click', () => {
  changeScreen('.screen-1', '.screen-3', pauseAudio1, playAudio3, button3);
});

/* 2 экран */
const secondRight = document.querySelector('.second-right');
secondRight.addEventListener('click', () => {
  changeScreen('.screen-2', '.screen-3', pauseAudio2, playAudio3, button3);
});

const secondLeft = document.querySelector('.second-left');
secondLeft.addEventListener('click', () => {
  changeScreen('.screen-2', '.screen-1', pauseAudio2, playAudio1, button1);
});

/* 3 экран */
const thirdRight = document.querySelector('.third-right');
thirdRight.addEventListener('click', () => {
  changeScreen('.screen-3', '.screen-1', pauseAudio3, playAudio1, button1);
});

const thirdLeft = document.querySelector('.third-left');
thirdLeft.addEventListener('click', () => {
  changeScreen('.screen-3', '.screen-2', pauseAudio3, playAudio2, button2);
});

/* Функции для управления аудио */
function playAudio1() {
  audio1.play();
  updatePlayPauseButton(button1, audio1);
}
function pauseAudio1() {
  audio1.pause();
  updatePlayPauseButton(button1, audio1);
}

function playAudio2() {
  audio2.play();
  updatePlayPauseButton(button2, audio2);
}
function pauseAudio2() {
  audio2.pause();
  updatePlayPauseButton(button2, audio2);
}

function playAudio3() {
  audio3.play();
  updatePlayPauseButton(button3, audio3);
}
function pauseAudio3() {
  audio3.pause();
  updatePlayPauseButton(button3, audio3);
}

// Вспомогательная функция для форматирования времени (минуты:секунды)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

// Функция для переключения кнопки Play/Pause
function togglePlayPause(button, audio) {
  if (audio.paused) {
    audio.play();
    button.classList.add('pause');
  } else {
    audio.pause();
    button.classList.remove('pause');
  }
}

// Audio 1
const audio1 = document.querySelector('.audio1');
const currentTimeEl1 = document.querySelector('.current-time1');
const totalTimeEl1 = document.querySelector('.total-time1');
const progressEl1 = document.querySelector('#input1');
const button1 = document.querySelector('.button1');

// Обновление общей длительности и текущего времени
audio1.addEventListener('loadedmetadata', () => {
  totalTimeEl1.textContent = formatTime(audio1.duration); // Устанавливаем общее время
});

audio1.addEventListener('timeupdate', () => {
  currentTimeEl1.textContent = formatTime(audio1.currentTime); // Обновляем текущее время
  if (!mouseDownOnSlider1) {
    progressEl1.value = (audio1.currentTime / audio1.duration) * 100;
  }
});

// Управление кнопкой Play/Pause
button1.addEventListener('click', () => togglePlayPause(button1, audio1));

// Audio 2
const audio2 = document.querySelector('.audio2');
const currentTimeEl2 = document.querySelector('.current-time2');
const totalTimeEl2 = document.querySelector('.total-time2');
const progressEl2 = document.querySelector('#input2');
const button2 = document.querySelector('.button2');

// Обновление общей длительности и текущего времени
audio2.addEventListener('loadedmetadata', () => {
  totalTimeEl2.textContent = formatTime(audio2.duration);
});

audio2.addEventListener('timeupdate', () => {
  currentTimeEl2.textContent = formatTime(audio2.currentTime);
  if (!mouseDownOnSlider2) {
    progressEl2.value = (audio2.currentTime / audio2.duration) * 100;
  }
});

// Управление кнопкой Play/Pause
button2.addEventListener('click', () => togglePlayPause(button2, audio2));

// Audio 3
const audio3 = document.querySelector('.audio3');
const currentTimeEl3 = document.querySelector('.current-time3');
const totalTimeEl3 = document.querySelector('.total-time3');
const progressEl3 = document.querySelector('#input3');
const button3 = document.querySelector('.button3');

// Обновление общей длительности и текущего времени
audio3.addEventListener('loadedmetadata', () => {
  totalTimeEl3.textContent = formatTime(audio3.duration);
});

audio3.addEventListener('timeupdate', () => {
  currentTimeEl3.textContent = formatTime(audio3.currentTime);
  if (!mouseDownOnSlider3) {
    progressEl3.value = (audio3.currentTime / audio3.duration) * 100;
  }
});

// Управление кнопкой Play/Pause
button3.addEventListener('click', () => togglePlayPause(button3, audio3));

// Управление слайдером для всех аудиофайлов
let mouseDownOnSlider1 = false;
let mouseDownOnSlider2 = false;
let mouseDownOnSlider3 = false;

progressEl1.addEventListener('change', () => {
  audio1.currentTime = (audio1.duration || 0) * (progressEl1.value / 100);
});
progressEl1.addEventListener('mousedown', () => {
  mouseDownOnSlider1 = true;
});
progressEl1.addEventListener('mouseup', () => {
  mouseDownOnSlider1 = false;
});

progressEl2.addEventListener('change', () => {
  audio2.currentTime = (audio2.duration || 0) * (progressEl2.value / 100);
});
progressEl2.addEventListener('mousedown', () => {
  mouseDownOnSlider2 = true;
});
progressEl2.addEventListener('mouseup', () => {
  mouseDownOnSlider2 = false;
});

progressEl3.addEventListener('change', () => {
  audio3.currentTime = (audio3.duration || 0) * (progressEl3.value / 100);
});
progressEl3.addEventListener('mousedown', () => {
  mouseDownOnSlider3 = true;
});
progressEl3.addEventListener('mouseup', () => {
  mouseDownOnSlider3 = false;
});