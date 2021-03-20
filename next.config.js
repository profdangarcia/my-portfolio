const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    return config
  }
})
