'use strict'

var test = require('tape')
var Struct = require('observ-struct')
var Observ = require('observ')
var update = require('./')

test(function (t) {
  var state = Struct({
    foo: Observ(1),
    bar: Observ(2)
  })
  update(state, {
    foo: 10,
    bar: 20
  })
  t.deepEqual(state(), {
    foo: 10,
    bar: 20
  })
  t.end()
})
