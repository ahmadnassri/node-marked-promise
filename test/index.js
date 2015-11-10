/* global describe, it*/

'use strict'

var assert = require('assert')
var marked = require('..')

describe('marked-promise', function () {
  it('should successfully process markdown', function (next) {
    var resolve = next.bind(null, null)

    marked('I am using __markdown__.').then(function (content) {
      assert.equal('<p>I am using <strong>markdown</strong>.</p>\n', content)
    })
    .then(resolve, next)
  })
})
