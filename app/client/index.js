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
} else if (step === 'step3') {
    store.dispatch('app/initStep3', {infoText, structure, store, cart, step, nextStep, locale, absServer}, {root: true})
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