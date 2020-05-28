"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function isAcceptablePassword(password) {
    return password.length > 6;
}
console.log('Example:');
console.log(isAcceptablePassword('short'));
// These "asserts" are used for self-checking
assert_1.default.equal(isAcceptablePassword('short'), false);
assert_1.default.equal(isAcceptablePassword('muchlonger'), true);
assert_1.default.equal(isAcceptablePassword('ashort'), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
