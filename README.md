# brisky-is-empty
Checks if a [brisky-base](https://www.npmjs.com/package/brisky-base) object is empty

[![Build Status](https://travis-ci.org/vigour-io/brisky-is-empty.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-is-empty)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-empty.svg)](https://badge.fury.io/js/brisky-is-empty)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-is-empty/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-is-empty?branch=master)

--

```javascript
const isEmpty = require('brisky-is-empty')
const base = require('brisky-base')
isEmpty(base({})) // true
isEmpty(base({ awesome: true })) // false
```
