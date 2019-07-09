var BerlinClock = require("./BerlinClock");

var time = new Date();

var berlinClock = new BerlinClock(time);

window.onload = function () {

    document.getElementById("btnConvert").addEventListener("click", function (e) {
        e.preventDefault();
        time.setMinutes(document.getElementById("minutes").value);
        document.getElementById("berlinTimeSingleMinutes").innerHTML = berlinClock.bottomMinutes();
        document.getElementById("berlinTimeFiveMinutes").innerHTML = berlinClock.topMinutes();
    });
};