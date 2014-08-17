var GLOBAL = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global : {};

var tape = GLOBAL.__TAPE_CACHED_LAZY_HARNESS;

if (!tape) {
    tape = require('tape');
}

module.exports = tape;
