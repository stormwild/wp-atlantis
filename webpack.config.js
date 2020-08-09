const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (() => {
  return {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: './js/app.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/[name].bundle.js',
    },
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/style.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Resolve URL Loader
            'resolve-url-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  };
})();

module.exports = config;
