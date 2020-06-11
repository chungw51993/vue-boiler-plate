/* eslint-disable */
module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('define')
      .tap((definitions) => {
        if (process.env.CURRENT_ENV === 'production') {
          definitions[0] = Object.assign(definitions[0], {
          });
        } else if (process.env.CURRENT_ENV === 'staging') {
          definitions[0] = Object.assign(definitions[0], {
          });
        } else {
          definitions[0] = Object.assign(definitions[0], {
          });
        }
        return definitions;
      });
  },
};
