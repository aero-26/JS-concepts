"use strict";

// Recording current time
const timeNow = new Date();

const user1 = {
  uName: "Folami Samira",
  lastSeen: "2024-02-29T11:14:23.255Z",
};

const user2 = {
  uName: "Sienna Viljami",
  lastSeen: "2024-02-28T22:30:40.000Z",
};

const user3 = {
  uName: "Maia Monique",
  lastSeen: "2024-02-27T23:46:55.358Z",
};

const user4 = {
  uName: "Jaylah Narcisa",
  lastSeen: "2024-01-20T14:41:40.000Z",
};

const user5 = {
  uName: "Ithel David",
  lastSeen: "2023-01-20T14:41:40.000Z",
};

const totalUser = [user1, user2, user3, user4, user5];

const calcLastSeen = (user) => {
  // Calculate difference between time now and last login
  let diff = Math.abs(timeNow - new Date(user.lastSeen));

  // For few moments Ago
  if (diff < 1000 * 60) {
    console.log(`${user.uName} last seen few moments ago.`);
  }

  // For Mins
  else if (diff < 1000 * 60 * 59) {
    let mins = 1000 * 60;

    // For 1 Minute
    if (Math.round(diff / mins) <= 1) {
      console.log(
        `${user.uName} last seen ${Math.round(diff / mins)} min ago.`
      );
    }

    // For more than 1 Minute
    else {
      console.log(
        `${user.uName} last seen ${Math.round(diff / mins)} mins ago.`
      );
    }
  }

  // For Hours
  else if (diff <= 1000 * 60 * 60 * 23) {
    let hrs = 1000 * 60 * 60;

    // For 1 Hour
    if (Math.round(diff / hrs) <= 1) {
      console.log(
        `${user.uName} last seen ${Math.round(diff / hrs)} hour ago.`
      );
    }

    // For more than 1 Hour
    else {
      console.log(
        `${user.uName} last seen ${Math.round(diff / hrs)} hours ago.`
      );
    }
  }

  // For Days
  else if (diff < 1000 * 60 * 60 * 24 * 30) {
    let day = 1000 * 60 * 60 * 24;

    // For 1 Day
    if (Math.round(diff / day) <= 1) {
      console.log(`${user.uName} last seen ${Math.round(diff / day)} day ago.`);
    }

    // For more than 1 Day
    else {
      console.log(
        `${user.uName} last seen ${Math.round(diff / day)} days ago.`
      );
    }
  }

  // For Months
  else if (diff <= 1000 * 60 * 60 * 24 * 30 * 11) {
    let month = 1000 * 60 * 60 * 24 * 30;

    // For 1 month
    if (Math.round(diff / month) <= 1) {
      console.log(
        `${user.uName} last seen ${Math.round(diff / month)} month ago.`
      );
    }

    // For more than 1 month
    else {
      console.log(
        `${user.uName} last seen ${Math.round(diff / month)} months ago.`
      );
    }
  }

  // For Years
  else if (diff > 1000 * 60 * 60 * 24 * 30 * 11) {
    let year = 1000 * 60 * 60 * 24 * 30 * 12;

    // For 1 Year
    if (Math.round(diff / year) <= 1) {
      console.log(
        `${user.uName} last seen ${Math.round(diff / year)} year ago.`
      );
    }

    // For more than 1 Year
    else {
      console.log(
        `${user.uName} last seen ${Math.round(diff / year)} years ago.`
      );
    }
  }
};

// Calculating last seen duration
for (let i = 0; i < totalUser.length; i++) {
  calcLastSeen(totalUser[i]);
}
