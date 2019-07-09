var BerlinClock = function (time) {
    this.bottomMinutes = function () {

        if(time.getMinutes() % 5 === 1){
            return "YOOO";
        }else{
            return "OOOO";
        }
    }
};
module.exports = BerlinClock;