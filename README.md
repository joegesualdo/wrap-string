## Wrap String
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
