let dayjs = require("dayjs");
let utc = require("dayjs/plugin/utc");
let timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

const selectedTimeZone = "America/Halifax";
let now = dayjs().tz(selectedTimeZone);
let time = now.format("HH:mm:ss");
let date = now.format("dddd, MMMM D YYYY");



document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;
document.getElementById("timezone").innerHTML = selectedTimeZone;
