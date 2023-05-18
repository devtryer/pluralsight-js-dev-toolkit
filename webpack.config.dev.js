import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve("src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};

// bit.ly/3aZEd7p
// for front end

// see webpack.js.org and js.org


/*
ERROR!!! 
file:///C:/PROJECTS/LEARN/Pluralsight-JS-Dev-Toolkit/webpack.config.dev.js:8
    path: path.resolve(__dirname, "src"),
                       ^

ReferenceError: __dirname is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and 'C:\PROJECTS\LEARN\Pluralsight-JS-Dev-Toolkit\package.json' contains "type": "module".
 To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/PROJECTS/LEARN/Pluralsight-JS-Dev-Toolkit/webpack.config.dev.js:8:24

*/