"use strict"
function runClock() {
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
}
runClock();
setInterval("runClock()",1000);