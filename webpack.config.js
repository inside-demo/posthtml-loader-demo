const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      app: './app.js'
    },
    output: {
      path: path.resolve(__dirname + '/docs/'),
      filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'posthtml-loader',
            options: {
              parser: require('posthtml-pug')()
            }
          }
        ]
      }
    ]
  }
}