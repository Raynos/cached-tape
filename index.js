var GLOBAL = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global : {};

var tape = GLOBAL.__TAPE_CACHED_LAZY_HARNESS;

if (!tape) {
    tape = GLOBAL.__TAPE_CACHED_LAZY_HARNESS = require('tape');
}

module.exports = tape;

