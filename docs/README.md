## Install

```bash
npm install marked-promise
```

## API

### marked(markdown [, options])

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
