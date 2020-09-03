import { isAcceptablePassword } from '../src/acceptable-password';
import {describe, it } from "mocha";
import { expect } from "chai";


describe('Tests for acceptable password task', () => {
    it('should return false for short password', () => {
      expect(isAcceptablePassword('short')).to.be.false;
    });

    it('should return true for long password', () => {
      expect(isAcceptablePassword('muchlonger')).to.be.true;
    });

    it('should return false for short password', () => {
      expect(isAcceptablePassword('ashort')).to.be.false;
    });
  });