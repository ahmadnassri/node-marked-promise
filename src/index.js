const { parse } = require('marked')

module.exports = function (string, options) {
  return new Promise((resolve, reject) => {
    /* istanbul ignore next */
    parse(string, options, (err, content) => err ? reject(err) : resolve(content))
  })
}
