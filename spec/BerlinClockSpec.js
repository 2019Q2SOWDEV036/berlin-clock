var BerlinClock = require("../src/BerlinClock");

var time = new Date();

var berlinClock = new BerlinClock(time);

describe("Berlin Clock", function () {

    describe("Single Minutes", function () {

        it('should have all lamps to be OFF in single minutes row', function () {

            time.setMinutes(0, 0, 0);

            expect(berlinClock.bottomMinutes()).toBe("OOOO");
        });

        it('should have first lamp to be ON in single minutes row', function () {

            time.setMinutes(1, 0, 0);

            expect(berlinClock.bottomMinutes()).toBe("YOOO");
        });
    });
});