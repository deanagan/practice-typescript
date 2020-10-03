import { betweenMarkers } from '../src/between-markers';
import { describe, it, Test } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    input: string;
    leftMarker: string;
    rightMarker: string;
    expected: string;
}

const testParameters : TestParameter[] = [
    {input: 'What is >apple<', leftMarker: '>', rightMarker: '<', expected: 'apple'},
    {input: 'What is [apple]', leftMarker: '[', rightMarker: ']', expected: 'apple'},
    {input: 'What is ><', leftMarker: '>', rightMarker:'<', expected: ''},
    {input: '[an apple]', leftMarker: '[', rightMarker: ']', expected: 'an apple'},
];


describe('Between marker Test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when give input '${tp.input}' with left marker '${tp.leftMarker}' and right marker '${tp.rightMarker}'.`, () => {
            expect(betweenMarkers(tp.input, tp.leftMarker, tp.rightMarker)).to.equal(tp.expected);
        });
    });

});
