module.exports = {
  baseUrl: '/hotels',
  outputDir: '../public/hotels',
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
