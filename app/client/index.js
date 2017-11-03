// import './promise-polyfill'
import 'babel-polyfill'
import  'eventsource-polyfill'
import { application, store } from './app'

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

if (step === 'comparator') {
  store.dispatch('comparator/init', {competitors, boBestPrice, absServer}, {root: true})
    .then(() => application.$mount('#app'))
} else {
  store.dispatch('app/init', {
    nextStep,
    step,
    locale,
    structure,
    store,
    absServer,
    cart,
    structureConfig,
    flowSetup
  }, {root: true})
    .then(() => application.$mount('#app'))

}