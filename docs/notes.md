# Notes

Build a template

Setup webpack for development

Use sass for styles

Use css variables (custom properties)

## Sass

```sh
yarn add -D sass-loader sass  node-sass
```

```js
{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
```
