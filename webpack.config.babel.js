import path from 'path';
import { LoaderOptionsPlugin } from 'webpack';

export default {
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
          { 
            loader: 'html-loader', 
            options: { minimize: true } 
          },
          {
            loader: 'posthtml-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({
       options: {
         posthtml(ctx) {
          return {
            parser: require('posthtml-pug'),
            plugins: [
              require('posthtml-include')({ root: ctx.resourcePath })
            ]
          }
        }
      }
    })
  ]
}