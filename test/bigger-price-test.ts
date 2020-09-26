import { Stock, biggerPrice } from '../src/bigger-price';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { createPrinter } from 'typescript';


interface TestParameter {
    limit: number;
    stocks: Stock[];
    expected: Stock[];
}

const testParameters : TestParameter[] = [
    { limit: 2, stocks: [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ], expected: [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ]},
    { limit: 1, stocks: [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170},
    ], expected: [
        {"name": "whiteboard", "price": 170}
    ]}
]

describe('Bigger price test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${JSON.stringify(tp.expected)}' when given '${JSON.stringify(tp.stocks)}' with limit '${tp.limit}'`, () => {
            expect(biggerPrice(tp.limit, tp.stocks)).to.be.eql(tp.expected);
        })
    });
});