var BerlinClock = require("../src/BerlinClock");

var time = new Date();

var berlinClock = new BerlinClock(time);

describe("Berlin Clock", function () {

    describe("Single Minutes", function () {

        it('should have all lamps to be OFF in single minutes row', function () {

            expect(berlinClock.bottomMinutes()).toBe("OOOO");
        });
    });
});