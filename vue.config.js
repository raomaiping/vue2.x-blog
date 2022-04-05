const path = require('path')
const config = require('./src/config')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const name = config.title || '前端小菜鸟吖'

module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@components':resolve('src/components')
      },
    },
  },
  chainWebpack(config) {
    // 它可以提高第一屏的速度，建议开启预载
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        //忽略runtime.js
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ])

    // 当有很多页面时，会导致太多无意义的请求
    config.plugins.delete('prefetch')

    // 设置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/api',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api': '' },
    //   },
    // },
  },
}
