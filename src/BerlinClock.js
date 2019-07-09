var CONSTANTS = require('./config/Constants');

var BerlinClock = function (time) {

    this.bottomMinutes = function () {

        var illuminatedLamps, non_illuminatedLamps;

        illuminatedLamps = getMinutesForSingleMinuteRow();

        non_illuminatedLamps = CONSTANTS.TOTAL_BOTTOM_MINUTES_LAMP - illuminatedLamps;

        return signLamps(illuminatedLamps, CONSTANTS.YELLOW) + signLamps(non_illuminatedLamps, CONSTANTS.OFF);
    };

    function getMinutesForSingleMinuteRow() {
        return time.getMinutes() % CONSTANTS.TIME_PER_LAMP_MINUTES;
    }

    function signLamps(numberLamps, lampSign) {
        var result = "";
        for (var lamp = 0; lamp < numberLamps; lamp++) {
            result += lampSign;
        }
        return result;
    }
};
module.exports = BerlinClock;