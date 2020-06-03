"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function beginningZeros(text) {
    let count = 0;
    for (let index = 0; index < text.length; index++) {
        if (text[index] !== '0') {
            break;
        }
        count++;
    }
    assert_1.default.strictEqual(count, text.replace(/[^0].*$/, '').length);
    return count;
}
console.log('Example:');
console.log(beginningZeros('100'));
// These "asserts" are used for self-checking
assert_1.default.equal(beginningZeros('100'), 0);
assert_1.default.equal(beginningZeros('001'), 2);
assert_1.default.equal(beginningZeros('100100'), 0);
assert_1.default.equal(beginningZeros('001001'), 2);
assert_1.default.equal(beginningZeros('012345679'), 1);
assert_1.default.equal(beginningZeros('0000'), 4);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
