"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function backwardString(value) {
    // spread operator requires es6 or es2015
    return [...value].reverse().join('');
}
console.log('Example:');
console.log(backwardString('val'));
// These "asserts" are used for self-checking
assert_1.default.equal(backwardString('val'), 'lav');
assert_1.default.equal(backwardString(''), '');
assert_1.default.equal(backwardString('ohho'), 'ohho');
assert_1.default.equal(backwardString('123456789'), '987654321');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
