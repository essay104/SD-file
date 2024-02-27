const today = new Date();

const displayDate = document.querySelector("#today");
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();

let day2 = "";

switch (day1) {
  case 0:
    day2 = "일";
    break;
  case 1:
    day2 = "월";
    break;
  case 2:
    day2 = "화";
    break;
  case 3:
    day2 = "수";
    break;
  case 4:
    day2 = "목";
    break;
  case 5:
    day2 = "금";
    break;
  case 6:
    day2 = "토";
    break;
}

displayDate.innerText = `${year} : 0${month} : ${date} ${day2}`;

const displayTime = document.querySelector("#clock");

const hrs = today.getHours();
const mins = today.getMinutes();
const secs = today.getSeconds();

const clock = () => {
  let cur = new Date();
  let hrs = cur.getHours();
  let mins = cur.getMinutes();
  let secs = cur.getSeconds();
  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  displayTime.innerText = ` ${period} ${hrs} : ${mins} : ${secs}`;
};

setInterval(clock, 1000);
