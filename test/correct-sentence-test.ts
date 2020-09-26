import { correctSentence } from '../src/correct-sentence';
import { it, describe } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    input: string;
    expected: string;
}

const testParameters: TestParameter[] = [
    { input: 'greetings, friends', expected: 'Greetings, friends.'},
    { input: 'Greetings, friends', expected: 'Greetings, friends.'},
    { input: 'Greetings, friends.', expected: 'Greetings, friends.'},
];

describe('Correct sentence test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(correctSentence(tp.input)).to.be.equal(tp.expected);
        })
    });
});
