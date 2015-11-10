# marked-promise [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

[Promise] version of [marked]:

> Match files using the patterns the shell uses, like stars and stuff.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

```sh
npm install --save marked-promise
```

## API

```js
var marked = require('marked-promise')
```

### marked(markdownString [, options])

*pattern*: `String`  
*options*: `Object`
Return: `Object` ([Promise])

When it finishes, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with an `String` of the HTML content as its first argument.

When it fails to read the files, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

```js
marked('I am using __markdown__.')
  .then(function(contents) {
    contents; //=> <p>I am using <strong>markdown</strong>.</p>\n
  });
```

#### options

The option object will be directly passed to [marked](https://github.com/chjj/marked#options).

## License

[ISC License](LICENSE) &copy; [Ahmad Nassri](https://www.ahmadnassri.com/)

[license-url]: https://github.com/ahmadnassri/marked-promise/blob/master/LICENSE

[travis-url]: https://travis-ci.org/ahmadnassri/marked-promise
[travis-image]: https://img.shields.io/travis/ahmadnassri/marked-promise.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/marked-promise
[npm-license]: https://img.shields.io/npm/l/marked-promise.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/marked-promise.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/marked-promise.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/marked-promise
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/marked-promise.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/marked-promise.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/marked-promise
[david-image]: https://img.shields.io/david/ahmadnassri/marked-promise.svg?style=flat-square

[marked]: https://github.com/chjj/marked
[Promise]: http://promisesaplus.com/
