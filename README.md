# acceptVersion

[![Build Status](https://travis-ci.org/donginl/acceptVersion.svg?branch=master)](https://travis-ci.org/donginl/acceptVersion)
[![NPM](https://img.shields.io/npm/v/acceptVersion.svg)](https://npmjs.org/package/acceptVersion)
[![NPM Downloads](https://img.shields.io/npm/dm/acceptVersion.svg)](https://npmjs.org/package/acceptVersion)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/donginl/acceptVersion/blob/master/LICENSE)
[![Donate](https://img.shields.io/gratipay/donginl.svg)](https://gratipay.com/donginl)

Parsing `Accept-Version` on [expressjs](https://github.com/strongloop/express)
`acceptVersion` supported [semver](http://semver.org) version

## Support platforms
The `acceptVersion` module works with Node.js v0.10.x and later version too.

## Installation
```
$ npm install acceptVersion
```

## Usage

```js
var express = require('express'),
    acceptVersion = require('acceptVersion');

var app = express();
app.use(acceptVersion([versions]); // [versions] is your server supported version, Allow type : Array, String

app.get('/', function(req, res, next) {
  switch(req.acceptVersion) { // req.acceptVersion is client maximum Accept-Version
    case '1.0.0':
      // 1.0.0 logic
      break;
    default:
      // latest logic
      break;
  }
})
```

### Author: [DONG IN LEE](https://github.com/donginl)
