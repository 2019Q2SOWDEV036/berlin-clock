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

            time.setMinutes(59, 0, 0);

            expect(berlinClock.topMinutes()).toBe("YYRYYRYYRYY");
        });

        it('should have first red lamps to be ON in five minutes row', function () {

            time.setMinutes(23, 0, 0);

            expect(berlinClock.topMinutes()).toBe("YYRYOOOOOOO");
        });

        it('should have first two red lamps to be ON in five minutes row', function () {

            time.setMinutes(35, 0, 0);

            expect(berlinClock.topMinutes()).toBe("YYRYYRYOOOO");
        });
    });

    describe("Single Hours", function () {

        it('should have all lamps to be OFF in single hours row', function () {

            time.setHours(0, 0, 0, 0);

            expect(berlinClock.bottomHours()).toBe("OOOO");
        });

        it('should have first red lamp to be ON in single hours row', function () {

            time.setHours(1, 0, 0, 0);

            expect(berlinClock.bottomHours()).toBe("ROOO");
        });

        it('should have first 2 red lamps to be ON in single hours row', function () {

            time.setHours(13, 0, 0, 0);

            expect(berlinClock.bottomHours()).toBe("RRRO");
        });

        it('should have all red lamps to be ON in single hours row', function () {

            time.setHours(14, 0, 0, 0);

            expect(berlinClock.bottomHours()).toBe("RRRR");
        });
    });

    describe("Five Hours", function () {

        it('should have all lamps to be OFF in five hours row', function () {

            time.setHours(4, 0, 0, 0);

            expect(berlinClock.topHours()).toBe("OOOO");
        });

        it('should have first red lamp to be ON in five hours row', function () {

            time.setHours(9, 0, 0, 0);

            expect(berlinClock.topHours()).toBe("ROOO");
        });

        it('should have first two red lamps to be ON in five hours row', function () {

            time.setHours(14, 0, 0, 0);

            expect(berlinClock.topHours()).toBe("RROO");
        });

        it('should have first three red lamps to be ON in five hours row', function () {

            time.setHours(19, 0, 0, 0);

            expect(berlinClock.topHours()).toBe("RRRO");
        });
        it('should have all red lamps to be ON in five hours row', function () {

            time.setHours(20, 0, 0, 0);

            expect(berlinClock.topHours()).toBe("RRRR");
        });
    });

    describe("Seconds", function () {

        it('should have lamp ON in even seconds', function () {

            time.setSeconds(0, 60);

            expect(berlinClock.seconds()).toBe("Y");
        });

        it('should have lamp OFF in odd seconds', function () {

            time.setSeconds(1, 60);

            expect(berlinClock.seconds()).toBe("O");
        });

    });

    describe("Integrate Entire Berlin Clock", function () {

        it('should have berlin time when time at 00:00:00', function () {

            time.setHours(0, 0, 0);

            expect(berlinClock.getBerlinClock()).toBe("YOOOOOOOOOOOOOOOOOOOOOOO");
        });

        it('should have berlin time when time at 16:50:06', function () {

            time.setHours(16, 50, 6);

            expect(berlinClock.getBerlinClock()).toBe("YRRROROOOYYRYYRYYRYOOOOO");
        });

        it('should have berlin time when time at 11:37:01', function () {

            time.setHours(11, 37, 1);

            expect(berlinClock.getBerlinClock()).toBe("ORROOROOOYYRYYRYOOOOYYOO");
        });

        it('should have berlin time when time at 23:59:59', function () {

            time.setHours(23, 59, 59);

            expect(berlinClock.getBerlinClock()).toBe("ORRRRRRROYYRYYRYYRYYYYYY");
        });

    });
});