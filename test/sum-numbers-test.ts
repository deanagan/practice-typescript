// Please don't judge me for using the smashing pumpkin's 1979 song lyrics as an example
// we discuss + operator, optional chaining and nullish coalescing operator

import { sumNumbers, sumNumbersF, sumNumbersC, Touched } from '../src/sum-numbers';
import {describe, it } from "mocha";
import { expect } from "chai";


describe('Tests for sum numbers task', () => {
    it('should return 0 for hi only', () => {
      expect(sumNumbers('hi')).to.be.equal(0);
    });

    it('should return 1979 for string', () => {
      expect(sumNumbers('shakedown 1979 cool kids never have the time'))
        .to.be.equal(1979);
    });

    it('should return 2979 for string including 1000 guilts', () => {
      expect(sumNumbers('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
        .to.be.equal(2979);
    });
  });

  describe('Tests for sum numbers with filter and optional chaining task', () => {
    it('should return undefined for missing (but optional) argument', () => {
      expect(sumNumbersF()).to.be.undefined;
    });

    it('should return 0 for hi only', () => {
      expect(sumNumbersF('hi')).to.be.equal(0);
    });

    it('should return 1979 for string', () => {
      expect(sumNumbersF('shakedown 1979 cool kids never have the time'))
        .to.be.equal(1979);
    });

    it('should return 2979 for string including 1000 guilts', () => {
      expect(sumNumbersF('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
        .to.be.equal(2979);
    });
  });

  describe('Tests for sum numbers with nullish coalescing operator', () => {
    it('should return undefined for null argument', () => {
      expect(sumNumbersC(null)).to.be.equal(0);
    });

    it('should return 1979 for string', () => {
      expect(sumNumbersC('shakedown 1979 cool kids never have the time'))
        .to.be.equal(1979);
    });

    it('should return 2979 for string including 1000 guilts', () => {
      expect(sumNumbersC('shakedown 1979 cool kids never have the time ... in the land of 1000 guilts'))
        .to.be.equal(2979);
    });
  });


  describe('Tests touch interface', () => {
    it('describe me someday', () => {
      let t = new Touched();
    });


  });