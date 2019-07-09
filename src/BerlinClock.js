var BerlinClock = function (time) {
    this.bottomMinutes = function () {

        if (time.getMinutes() % 5 === 1) {
            return "YOOO";
        } else if (time.getMinutes() % 5 === 2) {
            return "YYOO";
        } else if (time.getMinutes() % 5 === 4) {
            return "YYYY";
        } else {
            return "OOOO";
        }
    }
};
module.exports = BerlinClock;