import { backwardStringByWord } from '../src/backward-string-by-word';
import { it, describe } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    input: string;
    expected: string;
}

const testParameters: TestParameter[] = [
    { input: '', expected: ''},
    { input: 'world', expected: 'dlrow'},
    { input: 'hello world', expected: 'olleh dlrow'},
    { input: 'hello   world', expected: 'olleh   dlrow'},
    { input: 'welcome to a game', expected: 'emoclew ot a emag'},
];

describe('Backward string by word test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(backwardStringByWord(tp.input)).to.be.equal(tp.expected);
        })
    });
});
