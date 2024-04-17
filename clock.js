const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const alarmSound = document.getElementById('alarm');
let timer;
let totalTime;
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  resetBtn.style.display = 'inline-block';
  let timeParts = timerDisplay.textContent.split(':');
  const minutes = parseInt(timeParts[0]);
  const seconds = parseInt(timeParts[1]);
  if (isNaN(minutes) || isNaN(seconds)) {
    alert('Thời gian nhập không hợp lệ.');
    return;
  }
  totalTime = (minutes * 60) + seconds;
  startTimer(totalTime);
});
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.style.display = 'inline-block';
  resetBtn.style.display = 'none';
  timerDisplay.textContent = '00:00';
});
function startTimer(totalSeconds) {
  let remainingTime = totalSeconds;
  timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
    if (remainingTime <= 0) {
      clearInterval(timer);
      alarmSound.play();
      setTimeout(() => {
        alarmSound.pause();
        alarmSound.currentTime = 0;
      },); 
    }
    if (remainingTime<=0){
        clearInterval(timer);
        alert("Hết giờ")
    }
    remainingTime--;
  },1000 );
}

    

   