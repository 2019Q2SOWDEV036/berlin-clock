var BerlinClock = require("./BerlinClock");

var time = new Date();

var berlinClock = new BerlinClock(time);

window.onload = function () {

    document.getElementById("btnConvert").addEventListener("click", function (e) {

        e.preventDefault();

        time.setMinutes(document.getElementById("minutes").value);

        time.setHours(document.getElementById("hours").value);

        time.setSeconds(document.getElementById("seconds").value);

        document.getElementById("berlinTimeToggleSeconds").innerHTML = berlinClock.seconds();

        document.getElementById("berlinTimeFiveHours").innerHTML = berlinClock.topHours();

        document.getElementById("berlinTimeSingleHours").innerHTML = berlinClock.bottomHours();

        document.getElementById("berlinTimeSingleMinutes").innerHTML = berlinClock.bottomMinutes();

        document.getElementById("berlinTimeFiveMinutes").innerHTML = berlinClock.topMinutes();
    });
};