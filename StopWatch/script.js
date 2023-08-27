// Select the necessary HTML elements
const display = document.querySelector('#stopwatch-display');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');

// Initialize the count variable and other necessary variables
let count = 0;
let isRunning = false;
let intervalId;

// Define a function to format the count into a readable string
function formatCount(count) {
  let hours = Math.floor(count / 3600);
  let minutes = Math.floor((count - hours * 3600) / 60);
  let seconds = count % 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

// Bind click event listeners to the buttons
startButton.addEventListener('click', () => {
  if (!isRunning) {
    intervalId = setInterval(() => {
      count++;
      display.textContent = formatCount(count);
    }, 1000);
    isRunning = true;
  }
});

stopButton.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

resetButton.addEventListener('click', () => {
  count = 0;
  display.textContent = formatCount(count);
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});
