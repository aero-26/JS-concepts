"use strict";

const dateToday = new Date();
const currency = 500000;

const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  style: "currency",
  currency: "INR",
};

// Printing according to the locale
const printLocale = (locale, options, dateToday) => {
  console.log(`----------`);
  console.log(
    `Locale ${locale} => ${new Intl.DateTimeFormat(locale, options).format(
      dateToday
    )}`
  );
  console.log(
    `Currency => ${new Intl.NumberFormat(locale, options).format(currency)}`
  );
  console.log(`-----------`);
};

printLocale("ar-QA", options, dateToday);
printLocale("hi-IN", options, dateToday);
printLocale("en-US", options, dateToday);
