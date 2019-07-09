var CONSTANTS = require('./config/Constants');

var BerlinClock = function (time) {

    this.bottomMinutes = function () {

        var illuminatedLamps, non_illuminatedLamps;

        illuminatedLamps = getMinutesForSingleMinuteRow();

        non_illuminatedLamps = getNonIlluminatedLamps(CONSTANTS.TOTAL_BOTTOM_MINUTES_LAMP, illuminatedLamps);

        return signLamps(illuminatedLamps, CONSTANTS.YELLOW) + signLamps(non_illuminatedLamps, CONSTANTS.OFF);
    };
    this.topMinutes = function () {

        var illuminatedLamps, non_illuminatedLamps;

        illuminatedLamps = getMinutesForFiveMinuteRow();

        non_illuminatedLamps = getNonIlluminatedLamps(CONSTANTS.TOTAL_TOP_MINUTES_LAMP, illuminatedLamps);

        return quarterFiveMinutesLamps(illuminatedLamps) + signLamps(non_illuminatedLamps, CONSTANTS.OFF);

    };

    function getNonIlluminatedLamps(totalLamps, illuminatedLamps) {
        return totalLamps - illuminatedLamps;
    }

    function getMinutesForSingleMinuteRow() {
        return time.getMinutes() % CONSTANTS.TIME_PER_LAMP_MINUTES;
    }

    function getMinutesForFiveMinuteRow() {
        return Math.floor(time.getMinutes() / CONSTANTS.TIME_PER_LAMP_MINUTES);
    }

    function signLamps(numberLamps, lampSign) {
        var result = "";
        for (var lamp = 0; lamp < numberLamps; lamp++) {
            result += lampSign;
        }
        return result;
    }

    function quarterFiveMinutesLamps(illuminatedLamps) {
        var output = "";
        for (var lampMinute = 1; lampMinute <= illuminatedLamps; lampMinute++) {

            if ((lampMinute % 3) === 0) {
                output += CONSTANTS.RED;
            } else {
                output += CONSTANTS.YELLOW;
            }
        }
        return output;
    }
};
module.exports = BerlinClock;