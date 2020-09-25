import { firstWord } from "../src/first-word";
import { describe, it } from "mocha";

import { expect } from "chai";

interface TestParameters {
  input: string;
  expected: string;
}

const testParameters : TestParameters[] = [
    { input: "Hello world", expected: "Hello"},
    { input: " a word ", expected: "a"},
    { input: "don't touch it", expected: "don't"},
    { input: "greetings, friends", expected: "greetings"},
    { input: "... and so on ...", expected: "and"},
    { input: "hi", expected: "hi"},
];

describe("First Word Test", () => {
  testParameters.forEach((tp: TestParameters) => {
    it(`Should return "${tp.expected}" when "${tp.input}" is inputted.`, () => {
      expect(firstWord(tp.input)).to.be.equal(tp.expected);
    });
  });
});
