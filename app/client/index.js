// import './promise-polyfill'
import 'babel-polyfill'
import  'eventsource-polyfill'
import { application, store } from './app'

window.application = application

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

let infoText = ''

if (window.bookInfo) {
  infoText = window.bookInfo
}

let bookingConditionsLink = ''
if (window.reservationConditionsLink) {
  bookingConditionsLink = window.reservationConditionsLink
}

if (step === 'comparator') {
  let currency = '€'
  let isTest = true

  if (window.currency) {
    currency = window.currency
  }

  if (!window.isTest) {
    isTest = true
  }

  store.dispatch('comparator/init', {isTest, adults, children, checkin, checkout, boardId, structureId, channels, boBestPrice, absServer, currency}, {root: true})
    .then(() => application.$mount('#app'))
} else if (step === 'step3') {
    store.dispatch('app/initStep3', {bookingConditionsLink, flowSetup, structureConfig, infoText, structure, store, cart, step, nextStep, locale, absServer}, {root: true})
      .then(() => application.$mount('#app'))
} else {
  store.dispatch('app/init', {
    bookingConditionsLink,
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