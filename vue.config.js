const path = require('path');


module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/sass/variables.sass";',
      },
    },
  },
};
