const path = require('path')

// npx --config webpack.config.prod.js

module.exports = {
  mode: "production",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'index_prod_bundle.js'
  }
}