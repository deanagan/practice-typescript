import { timeConverter } from '../src/time-converter';
import { it, describe } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    timeStr: string;
    result: string;
}

const testParameters: TestParameter[] = [
    { timeStr: '12:30', result: '12:30 p.m.'},
    { timeStr: '09:00', result: '9:00 a.m.'},
    { timeStr: '23:15', result: '11:15 p.m.'}
]


describe('Time converter test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.result}' when given '${tp.timeStr}'`, () => {
            expect(timeConverter(tp.timeStr)).to.be.equal(tp.result);
        })
    });
});