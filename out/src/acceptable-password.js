"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAcceptablePassword = void 0;
function isAcceptablePassword(password) {
    return password.length > 6;
}
exports.isAcceptablePassword = isAcceptablePassword;
//console.log.log('Example:');
//console.log.log(isAcceptablePassword('short'));
// // These "asserts" are used for self-checking
//assert.equal.equal(isAcceptablePassword('short'), false);
//assert.equal.equal(isAcceptablePassword('muchlonger'), true);
//assert.equal.equal(isAcceptablePassword('ashort'), false);
