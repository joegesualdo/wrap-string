## Wrap String [![Build Status](https://travis-ci.org/joegesualdo/wrap-string.svg?branch=master)](https://travis-ci.org/joegesualdo/wrap-string)
> Wrap a string with other strings.

## Install
```
$ npm install --save wrap-string
```

## Usage
```javascript
var wrapString = require("wrap-string");

wrapString({
  string: "Hello world",
  prepend: "*",
  append: "*"
})
//=> *Hello world*
```

## Test
```
$ npm test
```

## License
MIT © Joe Gesualdo
