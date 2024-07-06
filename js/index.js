import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

document.addEventListener("DOMContentLoaded", function () {
    const refreshTime = () => {
        let selectedTimeZone = "America/Halifax";
        let now = dayjs().tz(selectedTimeZone);
        let time = now.format("HH:mm:ss");
        let date = now.format("dddd, MMMM D YYYY");
        document.getElementById("time").innerHTML = time;
        document.getElementById("date").innerHTML = date;
        document.getElementById("tz").innerHTML = selectedTimeZone;
    };
    refreshTime();
    setInterval(refreshTime, 1000);
});
