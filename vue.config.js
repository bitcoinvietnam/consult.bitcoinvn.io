module.exports = {
  // Set public path for different environments
  publicPath: process.env.NODE_ENV === 'PROD' ? '/' : process.env.NODE_ENV === 'STAGE' ? '/consult.bitcoinvn.io/' : '/'
}