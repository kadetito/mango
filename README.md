# Mango Challenge

![This is an image](http://www.webentorn.com/mango.png)

## Start Project
```yarn install```
```npm run start```

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
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
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
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
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
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
};

```

## Project Structure

![This is an image](http://www.webentorn.com/github_image.png)



## Files creation 

Creation of index.js and BasePattern.js. 
Creation of index.html into public path.

## Implementation of local server

We used Webpack Dev Server to this.
```npm install webpack-dev-server --save-dev```

## Modification of Scripts into package.json

Added this line into file package.json instead the default line

```
"scripts": {
  "start": "webpack-cli serve --open --mode development",
  "build": "webpack --mode production",
  "test": "echo \"Error: no test specified\" && exit 1"
}

```

## Build and Start
We used build command to create /dist path.
```npm run build```

Then run start:

```npm run start```