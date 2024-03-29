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

    this.bottomHours = function () {

        var illuminatedLamps, non_illuminatedLamps;

        illuminatedLamps = getHoursForSingleHoursRow();

        non_illuminatedLamps = getNonIlluminatedLamps(CONSTANTS.TOTAL_HOURS_LAMP, illuminatedLamps);

        return signLamps(illuminatedLamps, CONSTANTS.RED) + signLamps(non_illuminatedLamps, CONSTANTS.OFF);
    };

    this.topHours = function () {

        var illuminatedLamps, non_illuminatedLamps;

        illuminatedLamps = getHoursForFiveHoursRow();

        non_illuminatedLamps = getNonIlluminatedLamps(CONSTANTS.TOTAL_HOURS_LAMP, illuminatedLamps);

        return signLamps(illuminatedLamps, CONSTANTS.RED) + signLamps(non_illuminatedLamps, CONSTANTS.OFF);

    };

    this.seconds = function () {
        if (getSecondsLamp()) {
            return CONSTANTS.YELLOW;
        } else {
            return CONSTANTS.OFF;
        }
    };
    this.getBerlinClock = function () {
        var clock = [];

        clock.push(this.seconds());
        clock.push(this.topHours());
        clock.push(this.bottomHours());
        clock.push(this.topMinutes());
        clock.push(this.bottomMinutes());

        return clock.join("");
    };

    function getSecondsLamp() {
        return time.getSeconds() % 2 === 0;
    }

    function getNonIlluminatedLamps(totalLamps, illuminatedLamps) {
        return totalLamps - illuminatedLamps;
    }

    function getMinutesForSingleMinuteRow() {
        return time.getMinutes() % CONSTANTS.TIME_PER_LAMP_MINUTES;
    }

    function getHoursForSingleHoursRow() {
        return time.getHours() % CONSTANTS.TIME_PER_LAMP_HOURS;
    }

    function getMinutesForFiveMinuteRow() {
        return Math.floor(time.getMinutes() / CONSTANTS.TIME_PER_LAMP_MINUTES);
    }

    function getHoursForFiveHoursRow() {
        return Math.floor(time.getHours() / CONSTANTS.TIME_PER_LAMP_HOURS);
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