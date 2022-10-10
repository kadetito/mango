# Mango Challenge

## Project creation without CLI 

Used npm init -y to create package.json with default config

Next step: installed React and ReactDOM

``` npm install react react-dom --save ```

## Installing Babel
Used for transpile modern React and JavaScript code into JavaScript code that browsers can understand.

```npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev```

Now install Babel Plugin transform class. Check that --save-dev is indicated

```npm install babel-plugin-transform-class-properties --save-dev```


Next we are going to create a file in the root of the project called .babelrc and configure with this lines to call installed plugins:

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}

```

## Webpack Installation
Webpack is a tool for compile all JavaScript files into a single package that we can use in production.

```npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev```

And now let's write a file in the root path called webpack.config.js which will contain the recommended configuration. The HTML templates to use, the rules module, the valid extensions and the support file names will be indicated.

```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

## Project Structure

![This is an image](http://www.webentorn.com/2022-10-10 21_18_02-â README.md - mango - Visual Studio Code.png)

