import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtn.setAttribute('disabled', '');

let timerInterval;
let userSelectedDate;

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
const selectedDate = selectedDates[0];
if (selectedDate <= new Date()) {
iziToast.error({
title: 'Error',
message: 'Please choose a date in the future',
});
startBtn.disabled = true;
} else {
userSelectedDate = selectedDate;
startBtn.disabled = false;
}
},
};
flatpickr(datetimePicker, options);
startBtn.addEventListener("click", () => {
startBtn.disabled = true;
startBtn.classList.remove('this-date');
datetimePicker.disabled = true;
startCountdown();
});

function startCountdown() {
timerInterval = setInterval(() => {
const now = new Date();
const timeRemaining = userSelectedDate - now;
if (timeRemaining <= 0) {
clearInterval(timerInterval);
updateTimerDisplay(0, 0, 0, 0);
datetimePicker.disabled = false;
startBtn.disabled = false;
return;
}
const { days, hours, minutes, seconds } = convertMs(timeRemaining);
updateTimerDisplay(days, hours, minutes, seconds);
}, 1000);
}
function convertMs(ms) {
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const days = Math.floor(ms / day);
const hours = Math.floor((ms % day) / hour);
const minutes = Math.floor(((ms % day) % hour) / minute);
const seconds = Math.floor((((ms % day) % hour) % minute) / second);
return { days, hours, minutes, seconds };
}
function updateTimerDisplay(days, hours, minutes, seconds) {
daysEl.textContent = addLeadingZero(days);
hoursEl.textContent = addLeadingZero(hours);
minutEl.textContent = addLeadingZero(minutes);
secondsEl.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
return String(value).padStart(2, '0');
}
