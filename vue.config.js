module.exports = {
    publicPath: '/1-10calc/',

    chainWebpack: config => {
      config.module.rule('eslint').use('eslint-loader')
        .tap(opts => ({ ...opts, emitWarning: false }));
    }
}
