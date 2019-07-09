var BerlinClock = require("../src/BerlinClock");

var time, berlinClock;

beforeEach(function () {

    time = new Date();

    berlinClock = new BerlinClock(time);
});

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

        it('should have first two lamps to be ON in single minutes row', function () {

            time.setMinutes(2, 0, 0);

            expect(berlinClock.bottomMinutes()).toBe("YYOO");
        });

        it('should have all lamps to be ON in single minutes row', function () {

            time.setMinutes(4, 0, 0);

            expect(berlinClock.bottomMinutes()).toBe("YYYY");
        });
    });
    
    describe("Five Minutes", function () {

        it('should have all lamps to be OFF in five minutes row', function () {

            time.setMinutes(4, 0, 0);

            expect(berlinClock.topMinutes()).toBe("OOOOOOOOOOO");
        });

        it('should have first red lamp to be ON in first quarter, half or last quarter and others are in yellow', function () {

            time.setMinutes(59,0,0);

            expect(berlinClock.topMinutes()).toBe("YYRYYRYYRYY");
        });
    });
});