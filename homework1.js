// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const time = document.querySelector("h3");

function getTimes() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const date_temp = new Date();
  const date = new Date(date_temp + NINE_HOURS_MILLISECONDS);
  console.log(date);

  const total = xmasDay - date;

  const getDiffTime = Math.floor(
    (xmasDay.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  const getDiffhour = Math.floor(
    (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const getDiffMinute = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));

  const getDiffSecond = Math.floor((total % (1000 * 60)) / 1000);

  time.innerText = `${getDiffTime}d ${getDiffhour}h ${getDiffMinute}m ${getDiffSecond}s`;
}

function init() {
  setInterval(getTimes, 1000);
}
init();
