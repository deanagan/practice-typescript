"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Touched = exports.sumNumbersC = exports.sumNumbersF = exports.sumNumbers = void 0;
function sumNumbers(test) {
    return test.split(' ').map(word => +word || 0).reduce((total, current) => total + current, 0);
}
exports.sumNumbers = sumNumbers;
function sumNumbersF(test) {
    return test === null || test === void 0 ? void 0 : test.split(' ').filter(word => !Number.isNaN(word)).map(word => +word || 0).reduce((total, current) => total + current, 0);
}
exports.sumNumbersF = sumNumbersF;
function sumNumbersC(test) {
    let words = test !== null && test !== void 0 ? test : "";
    return words.split(' ').map(word => +word || 0).reduce((total, current) => total + current, 0);
}
exports.sumNumbersC = sumNumbersC;
class Touched {
}
exports.Touched = Touched;
