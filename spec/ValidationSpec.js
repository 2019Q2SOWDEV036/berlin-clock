var Validation = require("../src/Validation");

var validation;

validation = new Validation();

describe("Validation view", function () {

    it('should check if view is defined', function () {

        expect(validation).toBeDefined();
    });

    it('should check if validateTime method is called', function () {

        spyOn(validation, 'validateTime');

        validation.validateTime();

        expect(validation.validateTime).toHaveBeenCalled();
    });
});