"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function isAllUpper(text) {
    //return [...text].every(ch => ch == ch.toUpperCase() || ch.match(/^[\d|\s]$/));
    return text == text.toUpperCase();
}
console.log('Example:');
console.log(isAllUpper('ALL UPPER'));
// These "asserts" are used for self-checking
assert_1.default.equal(isAllUpper('ALL UPPER'), true);
assert_1.default.equal(isAllUpper('all lower'), false);
assert_1.default.equal(isAllUpper('mixed UPPER and lower'), false);
assert_1.default.equal(isAllUpper(''), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
