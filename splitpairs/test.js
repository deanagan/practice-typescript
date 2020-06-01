"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function splitPairs(text) {
    if (text.length % 2) {
        text = [...text].concat('_').join('');
    }
    // slow but convenient
    return text.split(/(.{1,2})/).filter(empty => empty);
}
console.log('Example:');
console.log(splitPairs('abcd'));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert_1.default.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert_1.default.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert_1.default.deepEqual(splitPairs('a'), ['a_']);
assert_1.default.deepEqual(splitPairs(''), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
