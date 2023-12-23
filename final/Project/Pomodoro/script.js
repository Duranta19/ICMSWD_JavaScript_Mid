let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  isRunning = true;
  timer = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  displayTime();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    alert('Pomodoro session ended!');
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  displayTime();
}

function displayTime() {
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
