"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function numberLength(value) {
    return value.toString().length;
}
console.log('Example:');
console.log(numberLength(10));
// These "asserts" are used for self-checking
assert_1.default.equal(numberLength(10), 2);
assert_1.default.equal(numberLength(0), 1);
assert_1.default.equal(numberLength(4), 1);
assert_1.default.equal(numberLength(44), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
