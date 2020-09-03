"use strict";
// Please don't judge me for using the smashing pumpkin's 1979 song lyrics as an example
// we discuss + operator, optional chaining and nullish coalescing operator
Object.defineProperty(exports, "__esModule", { value: true });
const sum_numbers_1 = require("../src/sum-numbers");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe('Tests for sum numbers task', () => {
    mocha_1.it('should return 0 for hi only', () => {
        chai_1.expect(sum_numbers_1.sumNumbers('hi')).to.be.equal(0);
    });
    mocha_1.it('should return 1979 for string', () => {
        chai_1.expect(sum_numbers_1.sumNumbers('shakedown 1979 cool kids never have the time'))
            .to.be.equal(1979);
    });
    mocha_1.it('should return 2979 for string including 1000 guilts', () => {
        chai_1.expect(sum_numbers_1.sumNumbers('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
            .to.be.equal(2979);
    });
});
mocha_1.describe('Tests for sum numbers with filter and optional chaining task', () => {
    mocha_1.it('should return undefined for missing (but optional) argument', () => {
        chai_1.expect(sum_numbers_1.sumNumbersF()).to.be.undefined;
    });
    mocha_1.it('should return 0 for hi only', () => {
        chai_1.expect(sum_numbers_1.sumNumbersF('hi')).to.be.equal(0);
    });
    mocha_1.it('should return 1979 for string', () => {
        chai_1.expect(sum_numbers_1.sumNumbersF('shakedown 1979 cool kids never have the time'))
            .to.be.equal(1979);
    });
    mocha_1.it('should return 2979 for string including 1000 guilts', () => {
        chai_1.expect(sum_numbers_1.sumNumbersF('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
            .to.be.equal(2979);
    });
});
mocha_1.describe('Tests for sum numbers with nullish coalescing operator', () => {
    mocha_1.it('should return undefined for null argument', () => {
        chai_1.expect(sum_numbers_1.sumNumbersC(null)).to.be.equal(0);
    });
    mocha_1.it('should return 1979 for string', () => {
        chai_1.expect(sum_numbers_1.sumNumbersC('shakedown 1979 cool kids never have the time'))
            .to.be.equal(1979);
    });
    mocha_1.it('should return 2979 for string including 1000 guilts', () => {
        chai_1.expect(sum_numbers_1.sumNumbersC('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
            .to.be.equal(2979);
    });
});
mocha_1.describe('Tests touch interface', () => {
    mocha_1.it('describe me someday', () => {
        let t = new sum_numbers_1.Touched();
    });
});
