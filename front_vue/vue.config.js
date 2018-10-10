module.exports = {
  // baseUrl: '/hotels',
  outputDir: '../public/hotels',
  devServer: {
    proxy: 'http://localhost:8080',
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 8081, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false
  }
}
