const path = require("path");

module.exports = {
  // Define the entry point(s) of your application
  entry: "./server.js",

  // Define where the bundled output should be placed
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Define rules for processing different file types
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader for transpilation
          options: {
            presets: ["@babel/preset-env"], // Use @babel/preset-env for ES6+ support
          },
        },
      },
      // Add more rules for other file types as needed
    ],
  },

  // Optionally, configure optimization for production builds
  // optimization: {
  //   minimize: true,
  // },

  // Optionally, configure additional plugins or resolve options
  // plugins: [
  //   new MyCustomPlugin(),
  // ],
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
  externals: {
    http: "commonjs http",
    https: "commonjs https",
    async_hooks: "commonjs async_hooks",
  },

  // Define any other configurations as needed
};
