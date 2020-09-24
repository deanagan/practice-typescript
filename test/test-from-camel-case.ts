
import { fromCamelCase } from '../src/from-camel-case';
import { it, describe } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    text: string;
    expected: string;
}



const testParameters : TestParameter[] = [
    { text: "MyFunctionName", expected: "my_function_name" },
    { text: "IPhone", expected: "i_phone" },
    { text: "ThisFunctionIsEmpty", expected:  "this_function_is_empty" },
    { text: "Name", expected: "name" },
]


describe("Test from camel case solution", () => {
    testParameters.forEach((tp: TestParameter) => {
        it(`Should return "${tp.expected}" when "${tp.text}" is passed`, () => {
            expect(fromCamelCase(tp.text)).to.be.equal(tp.expected);
        });
    });
});