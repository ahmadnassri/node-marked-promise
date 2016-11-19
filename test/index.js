import marked from '../src'
import { test } from 'tap'

test('marked-promise', (assert) => {
  return marked('I am using __markdown__.')
    .then((content) => assert.equal('<p>I am using <strong>markdown</strong>.</p>\n', content))
})
