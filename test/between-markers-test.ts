import { betweenMarkers, betweenWordMarkers } from '../src/between-markers';
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

const testParameters2 : TestParameter[] = [
    { input: 'What is >apple<', leftMarker: '>', rightMarker: '<', expected: 'apple'},
    { input: "<head><title>My new site</title></head>", leftMarker: "<title>", rightMarker: "</title>", expected: 'My new site'},
    { input: 'No[/b] hi', leftMarker: '[b]', rightMarker: '[/b]', expected: 'No'},
    { input: 'No [b]hi', leftMarker: '[b]', rightMarker: '[/b]', expected: 'hi'},
    { input: 'No hi', leftMarker: '[b]', rightMarker: '[/b]', expected: 'No hi'},
    { input: 'No <hi>', leftMarker: '>', rightMarker: '<', expected: ''},
];

describe('Between word marker Test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when give input '${tp.input}' with left marker '${tp.leftMarker}' and right marker '${tp.rightMarker}'.`, () => {
            expect(betweenWordMarkers(tp.input, tp.leftMarker, tp.rightMarker)).to.equal(tp.expected);
        });
    });

});
