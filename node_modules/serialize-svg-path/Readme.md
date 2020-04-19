
# serialize-svg-path

  compile svg path data to DOM compatable strings

## Installation

With your favourite package manager:

- [packin](//github.com/jkroso/packin): `packin add jkroso/serialize-svg-path`
- [component](//github.com/component/component#installing-packages): `component install jkroso/serialize-svg-path`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install serialize-svg-path`

then in your app:

```js
var serialize = require('serialize-svg-path')
```

## API

### serialize(path)

  convert `path` to a string

```js
serialize([['m',1,2],['c',1,2,3,4,5,6]]) // => 'm1,2c1,2,3,4,5,6'
```
