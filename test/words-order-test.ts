import { wordsOrder } from '../src/words-order';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    text: string;
    words: string[];
    expected: boolean;
}

const testParameters : TestParameter[] = [
    {text: 'hi world im here', words: ['world', 'here'], expected:  true },
    {text: 'hi world im here', words: ['here', 'world'], expected:  false },
    {text: 'hi world im here', words: ['world'], expected:  true },
    {text: 'hi world im here', words: ['world', 'here', 'hi'], expected:  false },
    {text: 'hi world im here', words: ['world', 'im', 'here'], expected:  true },
    {text: 'hi world im here', words: ['world', 'hi', 'here'], expected:  false },
    {text: 'hi world im here', words: ['world', 'world'], expected:  false },
    {text: 'hi world im here', words: ['country', 'world'], expected:  false },
    {text: 'hi world im here', words: ['wo', 'rld'], expected:  false },
    {text: '', words: ['world', 'here'], expected:  false },
    {text: 'hi world world im here', words: ['world', 'world'], expected:  false },
]


describe('Words order test', () => {
    testParameters.forEach((tp) => {
        it(`should expect '${tp.expected}' when given text '${tp.text}' with '${tp.words}'`, () => {
           expect(wordsOrder(tp.text, tp.words)).to.be.eq(tp.expected);
        });
    });
});