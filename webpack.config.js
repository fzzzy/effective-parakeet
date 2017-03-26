
module.exports = {
  context: __dirname,
  entry: {
    "asdf": "./src/asdf.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build",
    library: "[name]",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              "babel-preset-react",
              "babel-preset-stage-0"
            ].map(require.resolve)
          }
        }],
      }
    ]
  }
};
