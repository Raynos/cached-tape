var test = require('tape');

var cachedTape = require('../index.js');

test('cachedTape is a function', function (assert) {
    assert.equal(typeof cachedTape, 'function');
    assert.end();
});
