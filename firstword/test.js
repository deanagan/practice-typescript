"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function firstWord(text) {
    return text.split(' ')[0];
}
console.log('Example:');
console.log(firstWord('Hello world'));
// These "asserts" are used for self-checking
assert_1.default.equal(firstWord('Hello world'), 'Hello');
assert_1.default.equal(firstWord('a word'), 'a');
assert_1.default.equal(firstWord('hi'), 'hi');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
