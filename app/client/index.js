import './promise-polyfill'
import { application, store } from './app'

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

store.dispatch('app/init', {
  locale,
  structure,
  store,
  absServer,
  cart,
  structureConfig,
  flowSetup
}, {root: true})
  .then(() => {
    console.log('-- startup then')
    application.$mount('#app')
  })


