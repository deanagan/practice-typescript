"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importStar(require("assert"));
function endZeros(value) {
    var endZeroCount = 0;
    var valueStr = value.toString();
    for (var i = 0; i < valueStr.length; i++) {
        if (valueStr[i] === '0') {
            endZeroCount++;
        }
        else {
            endZeroCount = 0;
        }
    }
    var s = String(value);
    assert_1.strictEqual(endZeroCount, s.length - s.replace(/0*$/, '').length);
    return endZeroCount;
}
console.log('Example:');
console.log(endZeros(0));
// These "asserts" are used for self-checking
assert_1.default.equal(endZeros(0), 1);
assert_1.default.equal(endZeros(1), 0);
assert_1.default.equal(endZeros(10), 1);
assert_1.default.equal(endZeros(101), 0);
assert_1.default.equal(endZeros(245), 0);
assert_1.default.equal(endZeros(100100), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
