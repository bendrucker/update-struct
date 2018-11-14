# update-struct [![Build Status](https://travis-ci.org/bendrucker/update-struct.svg?branch=master)](https://travis-ci.org/bendrucker/update-struct) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/update-struct.svg)](https://greenkeeper.io/)

> Update key/value pairs in an observ-struct


## Install

```
$ npm install --save update-struct
```


## Usage

```js
var updateStruct = require('update-struct')
var Observ = require('observ')
var state = Struct({
  foo: Observ(1)
})
updateStruct(state, {foo: 2})
state()
//=> {foo: 2}
```

## API

#### `updateStruct(struct, [data])` -> `struct` / `function`

##### struct

*Required*  
Type: `function`

An observable [struct](https://github.com/raynos/observ-struct).

##### data

Type: `object`  

The data to use to update the struct. All keys must have already been defined as observables in the struct. If `data` is omitted, a partially applied function that takes a `data` argument will be returned.


## License

MIT © [Ben Drucker](http://bendrucker.me)
