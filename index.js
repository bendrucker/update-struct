'use strict'

var assertObserv = require('assert-observ')
var assert = require('assert-ok')
var partial = require('ap').partial
var forOwn = require('for-own')

module.exports = updateStruct

function updateStruct (struct, data) {
  assertObserv(struct)
  assert(struct._type === 'observ-struct', 'expected observ-struct')

  if (arguments.length < 2) return partial(updateStruct, struct)
  forOwn(data, update)
  return struct

  function update (value, key) {
    struct[key].set(value)
  }
}
