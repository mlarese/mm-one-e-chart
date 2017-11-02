'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: 'Node develope',
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '/',
  devtool: "source-map",
  // add these dependencies to a standalone vendor bundle
  vendor: [
      'vue',
      'vuex',
      // 'vue-router',
      // 'vuex-router-sync',
      'promise-polyfill',
      'numeral',
      "lodash",
      "axios"
  ],
  // disable babelrc by default
  babel: {
    babelrc: false,
    presets: [
      ["env", { "modules": false }],
      ['es2015', {modules: false}],
      'stage-2'
    ],
    // support jsx in render function
    plugins: [
      'transform-vue-jsx',
      'transform-runtime'
    ],
    "env": {
        "test": {
            "presets": ["env", "stage-2"],
            "plugins": [ "istanbul" ]
        }
    }
  },
  postcss: [
    // add prefix via postcss since it's faster
    require('autoprefixer')({
      // Vue does not support ie 8 and below
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  cssModules: false,
}
