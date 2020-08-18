module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}

//以下为cli4的默认配置
//因此在最加的别名配置中可以直接用下面的@
// resolve: {
//   extensions: ['.js', '.vue', '.json'],
//   alias: {
//     'vue$': 'vue/dist/vue.esm.js',
//     '@': resolve('src'),
//   }
// },
