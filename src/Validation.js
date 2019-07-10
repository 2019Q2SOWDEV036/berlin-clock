var BerlinClock = require("./BerlinClock");

var time = new Date();

var berlinClock = new BerlinClock(time);

var ValidateClock = function () {

    this.validateTime = function () {

        var minute = document.getElementById("minutes").value;

        var hours = document.getElementById("hours").value;

        var seconds = document.getElementById("seconds").value;

        validateMinutes();

        validateHours();

        validateSeconds();

        function validateSeconds() {

            if (seconds <= 59 && seconds !== "") {

                document.getElementById("berlinTimeToggleSeconds").innerHTML = berlinClock.seconds();

                document.getElementById("berlinClockTime").innerHTML = berlinClock.getBerlinClock();

                document.getElementById("secondsError").innerHTML = "";
            } else {
                document.getElementById("secondsError").innerHTML = "Please enter seconds between 0 to 59";
            }
        }

        function validateMinutes() {
            if (minute <= 59 && minute !== "") {
                time.setMinutes(document.getElementById("minutes").value);

                document.getElementById("berlinTimeFiveMinutes").innerHTML = berlinClock.topMinutes();

                document.getElementById("berlinClockTime").innerHTML = berlinClock.getBerlinClock();

                document.getElementById("berlinTimeSingleMinutes").innerHTML = berlinClock.bottomMinutes();

                document.getElementById("minutesError").innerHTML = "";
            } else {
                document.getElementById("minutesError").innerHTML = "Please enter minutes between 0 to 59";
            }
        }

        function validateHours() {
            if (hours <= 23 && hours !== "") {
                time.setHours(document.getElementById("hours").value);
                document.getElementById("berlinTimeFiveHours").innerHTML = berlinClock.topHours();

                document.getElementById("berlinClockTime").innerHTML = berlinClock.getBerlinClock();

                document.getElementById("berlinTimeSingleHours").innerHTML = berlinClock.bottomHours();

                document.getElementById("hoursError").innerHTML = "";
            } else {
                document.getElementById("hoursError").innerHTML = "Please enter hours between 0 to 23";
            }
        }
    }
};
module.exports = ValidateClock;