import { countDigits, mostWanted } from '../src/counting-from-strings';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface CountDigitsTestParameters {
    input: string;
    expected: number;
}

const countDigitsTestParameters : CountDigitsTestParameters[] = [
    { input: "hi", expected: 0},
    { input: "who is 1st here", expected: 1},
    { input: "my numbers is 2", expected: 1},
    { input: "This picture is an oil on canvas "
    + "painting by Danish artist Anna "
    + "Petersen between 1845 and 1910 year", expected: 8},
    { input: "5 plus 6 is", expected: 2},
    { input: "", expected: 0},
];


describe("Count Digits Test", () => {
    countDigitsTestParameters.forEach((tp: CountDigitsTestParameters) => {
        it(`Should return "${tp.expected}" when "${tp.input}" is inputted.`, () => {
            expect(countDigits(tp.input)).to.be.equal(tp.expected);
        });
    });
});

interface MostWantedLetterParameters {
    input: string;
    expected: string;
}

const mostWantedLetterTestParameters : MostWantedLetterParameters[] = [
    { input:'Hello World!', expected: 'l'},
    { input:'How do you do?', expected: 'o'},
    { input:'One', expected: 'e'},
    { input:'Oops!', expected: 'o'},
    { input:'AAaooo!!!!', expected: 'a'},
    { input:'abe', expected: 'a'},
];


describe("Most Wanted Letter Test", () => {
    mostWantedLetterTestParameters.forEach((tp: MostWantedLetterParameters) => {
        it(`Should return "${tp.expected}" when "${tp.input}" is inputted.`, () => {
            expect(mostWanted(tp.input)).to.be.equal(tp.expected);
        });
    });
});
