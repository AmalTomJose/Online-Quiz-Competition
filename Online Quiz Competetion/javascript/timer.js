const timerTime = document.querySelector(".timer");

let timerInterval;

const daysElem = document.getElementById("days"),
  hoursElem = document.getElementById("hours"),
  minutesElem = document.getElementById("minutes"),
  secondsElem = document.getElementById("seconds"),
  timer = document.getElementById("timer");           
/* Set countdown date by adding hours to current date */
let countdownDate = new Date().setHours(new Date().getHours() +2 );

/* Set countdown date by adding minutes to current date */
// let countdownDate = new Date().setMinutes(new Date().getMinutes() + );

/* Set countdown date by adding seconds to current date */
// let countdownDate = new Date().setSeconds(new Date().getSeconds() +3603);

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysElem.innerHTML = formatTime(days, "");
  hoursElem.innerHTML = formatTime(hours, "");
  minutesElem.innerHTML = formatTime(minutes, "");
  secondsElem.innerHTML = formatTime(seconds, "");
};

const endCountdown = () => {
  clearInterval(timerInterval);
  timer.remove();
  showResult();
};