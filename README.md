# Marked Promise

Promise version of marked

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![semantic][semantic-img]][semantic-url]

## Install

``` bash
npm install marked-promise
```

## API

### marked(markdown \[, options\])

*pattern*: `String`
*options*: `Object`
Return: `Object` (\[Promise\])

When it finishes, it will be [*fulfilled*][] with an `String` of the HTML content as its first argument.

When it fails to read the files, it will be [*rejected*][] with an error as its first argument.

``` js
marked('I am using __markdown__.')
  .then(function(contents) {
    contents; //=> <p>I am using <strong>markdown</strong>.</p>\n
  });
```

#### options

The option object will be directly passed to [marked][].

  [*fulfilled*]: http://promisesaplus.com/#point-26
  [*rejected*]: http://promisesaplus.com/#point-30
  [marked]: https://github.com/chjj/marked#options

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-marked-promise

[release-url]: https://github.com/ahmadnassri/node-marked-promise/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-marked-promise

[semantic-url]: https://github.com/ahmadnassri/node-marked-promise/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
