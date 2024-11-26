export function Timer() {
  const day = document.getElementById('day');
  const hrs = document.getElementById('hrs');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');

  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let newYear = new Date(Date.UTC(currentYear + 1, 0, 1));

  let timerDiff = newYear - currentDate;

  let days = Math.floor(timerDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(timerDiff / 1000 / 60 / 60 % 24);
  let minutes = Math.floor(timerDiff / 1000 / 60 % 60);
  let seconds = Math.floor(timerDiff / 1000 % 60);

  day.innerText = days;
  hrs.innerText = hours;
  min.innerText = minutes;
  sec.innerText = seconds;
}

