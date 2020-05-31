"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function replaceFirst(values) {
    return values.length > 0 ? values.slice(1).concat(values[0]) : [];
}
console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert_1.default.deepEqual(replaceFirst([1]), [1]);
assert_1.default.deepEqual(replaceFirst([]), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
