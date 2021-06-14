const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA(
  withImages({
    esModule: true,
    webpack(config, options) {
      config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
      return config
    },
    pwa: {dest: 'public'}
  })
)
