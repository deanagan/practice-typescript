"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function betweenMarkers(line, left, right) {
    return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}
console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));
// These "asserts" are used for self-checking
assert_1.default.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert_1.default.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert_1.default.equal(betweenMarkers('What is ><', '>', '<'), '');
assert_1.default.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
//# sourceMappingURL=test.js.map