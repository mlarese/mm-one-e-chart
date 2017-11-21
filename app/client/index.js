// import './promise-polyfill'
import 'babel-polyfill'
import  'eventsource-polyfill'
import { application, store } from './app'

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

let infoText = ''

if (window.bookInfo) {
  infoText = window.bookInfo
}

if (step === 'comparator') {
  let currency = '€'

  if (window.currency) {
    currency = window.currency
  }
  store.dispatch('comparator/init', {adults, children, checkin, checkout, boardId, structureId, channels, boBestPrice, absServer, currency}, {root: true})
    .then(() => application.$mount('#app'))
} else if (step === 'step3') {
    store.dispatch('app/initStep3', {flowSetup, structureConfig, infoText, structure, store, cart, step, nextStep, locale, absServer}, {root: true})
      .then(() => application.$mount('#app'))
} else {
  store.dispatch('app/init', {
    checkin,
    checkout,
    childrenData,
    adultsCount,
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