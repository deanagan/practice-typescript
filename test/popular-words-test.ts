import { popularWords } from '../src/popular-words';
import { describe, it } from 'mocha';
import { expect } from 'chai';


export interface LookUp<V> {
    [key: string]: V;
}

interface TestParameters {
    input: string;
    wordsToFind: string[];
    expected: LookUp<number>;
  }

  const testParameters : TestParameters[] = [
      { input: `
      When I was One
      I had just begun
      When I was Two
      I was nearly new`,
      wordsToFind: ['i', 'was', 'three', 'near'],
      expected: {
        'i': 4,
        'was': 3,
        'three': 0,
        'near': 0
    }},
  ];


describe("Popular words test", () => {
    testParameters.forEach((tp: TestParameters) => {
        it(`Should return "${tp.expected}" when given "${tp.input}" and search words are ${tp.wordsToFind}.`, () => {
            expect(popularWords(tp.input, tp.wordsToFind)).to.be.eql(tp.expected);
        });
    });
});
