# cached-tape

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

<!-- [![browser support][test-png]][test] -->

A cached version of tape

# Warning **do not use this module**

This module is only needed in extreme edge cases. One of these extreme
edge cases is if you have multiple node_modules folders in one application.

For your test suite to work across these node_modules folders you might
want to use `cached-tape`.

## Example

```js
var test = require("cached-tape");

// works like normal tape.
```

## Installation

`npm install cached-tape`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licenced

  [build-png]: https://secure.travis-ci.org/Raynos/cached-tape.png
  [build]: https://travis-ci.org/Raynos/cached-tape
  [cover-png]: https://coveralls.io/repos/Raynos/cached-tape/badge.png
  [cover]: https://coveralls.io/r/Raynos/cached-tape
  [dep-png]: https://david-dm.org/Raynos/cached-tape.png
  [dep]: https://david-dm.org/Raynos/cached-tape
  [test-png]: https://ci.testling.com/Raynos/cached-tape.png
  [test]: https://ci.testling.com/Raynos/cached-tape
  [npm-png]: https://nodei.co/npm/cached-tape.png?stars&downloads
  [npm]: https://nodei.co/npm/cached-tape
