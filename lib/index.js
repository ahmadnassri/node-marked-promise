'use strict'

const marked = require('marked')

module.exports = function (string, options) {
  return new Promise((resolve, reject) => {
    marked(string, options, (err, content) => err ? reject(err) : resolve(content))
  })
}
