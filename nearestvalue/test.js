"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function nearestValue(values, search) {
    let nearestValue = values[0];
    //values.sort(function (a: number,b: number) {
    //     return a - b;
    //});
    for (let i = 1; i < values.length; i++) {
        let curr = Math.abs(nearestValue - search);
        let cand = Math.abs(search - values[i]);
        if (curr > cand) {
            nearestValue = values[i];
        }
        else if (curr == cand) {
            nearestValue = Math.min(nearestValue, values[i]);
        }
    }
    return nearestValue;
}
console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
// These "asserts" are used for self-checking
assert_1.default.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert_1.default.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert_1.default.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert_1.default.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert_1.default.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert_1.default.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert_1.default.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert_1.default.equal(nearestValue([-1, 2, 3], 0), -1);
assert_1.default.equal(nearestValue([0, -2], -1), -2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
