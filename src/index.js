var ValidateClock = require("./Validation");

var validateClock = new ValidateClock();

window.onload = function () {

    document.getElementById("btnConvert").addEventListener("click", function (e) {

        e.preventDefault();

        validateClock.validateTime();
    });
};