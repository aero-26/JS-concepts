"use strict";

// Setting timeout in seconds
const setTime = 3610;

const stopWatch = function (timer) {
  // Converting time to Hour, Minute and Second
  const hour = String(Math.trunc(timer / 3600)).padStart(2, 0);
  const min = String(Math.trunc((timer % 3600) / 60)).padStart(2, 0);
  const sec = String(Math.trunc((timer % 3600) % 60)).padStart(2, 0);

  // Setting condition for time UP
  if (timer === 0) {
    console.log("TIME is UP");
  }

  // Coutout every second which is 1000 milliseconds
  else {
    setTimeout(() => {
      console.log(`${hour}:${min}:${sec}`);
      timer--;
      stopWatch(timer);
    }, "1000");
  }
};

stopWatch(setTime);

// Making clock

const hrsMinsSec = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

setInterval(() => {
  const time = new Date();
  console.log(new Intl.DateTimeFormat("en-IN", hrsMinsSec).format(time));
}, 1000);
