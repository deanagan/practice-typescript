/*
The function should recognise if a subject line is stressful. A stressful subject line means
that all letters are in uppercase, and/or ends by at least 3 exclamation marks, and/or contains at
least one of the following “red” words:
    "help",
    "asap",
    "urgent".

Any of those "red" words can be
spelled in different ways - "HELP", "help", "HeLp", "H!E!L!P!", "H-E-L-P", even in a very
loooong way "HHHEEEEEEEEELLP," they just can't have any other letters interspersed between them.

Input: Subject line as a string.
Output: Boolean.

Precondition: Subject can be up to 100 letters
*/


import { isStressful } from '../src/stressful-subject';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    input: string;
    isStressful: boolean;
}

const testParameters : TestParameter[] = [
    { input: "Hi", isStressful: false },
    { input: "HELP", isStressful: true },
    { input: "What is this!!!", isStressful: true },
    { input: "I neeed HELP", isStressful: true },
    { input: "asap help", isStressful: true },
    { input: "UUUURGGGEEEEENT here", isStressful: true },
    { input: "Hello!Please", isStressful: false },
    { input: "Hello!!", isStressful: false },
]


describe('Stressful subject test', () => {
    testParameters.forEach((testParameter) => {
        it(`should return '${testParameter.isStressful}' when given '${testParameter.input}'`, () => {
            expect(isStressful(testParameter.input)).to.be.equal(testParameter.isStressful);
        });
    });
});