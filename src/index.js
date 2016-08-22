import marked from 'marked'

export default function (string, options) {
  return new Promise((resolve, reject) => {
    marked(string, options, (err, content) => err ? reject(err) : resolve(content))
  })
}
