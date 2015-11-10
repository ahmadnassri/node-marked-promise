'use strict'

var marked = require('marked')

module.exports = function (markdownString, options) {
  return new Promise(function (_resolve, _reject) {
    marked(markdownString, options, function (err, content) {
      return err === null ? _resolve(content) : _reject(err)
    })
  })
  .catch(function (err) {
    throw err
  })
}
