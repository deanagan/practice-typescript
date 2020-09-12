import { threeWords } from '../src/three-words';
import { describe, it } from "mocha";
import { expect } from "chai";


describe("test for three words", () => {
    it("Hello World hello should return true", () => {
        expect(threeWords("Hello World hello")).to.be.true;
    });

    it("He is 123 man should return false", () => {
        expect(threeWords("He is 123 man")).to.be.false;
    });

    it("1 2 3 4 should return false", () => {
        expect(threeWords("1 2 3 4")).to.be.false;
    });

    it("bla bla bla bla should return true", () => {
        expect(threeWords("bla bla bla bla")).to.be.true;
    });

    it("Hi should return false", () => {
        expect(threeWords("Hi")).to.be.false;
    });
});
