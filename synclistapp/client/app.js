import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'
import createStore from '../store'
import _isString from 'lodash/isString'

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(Notifications)

const messages = {
  it: {

  },
  en: {

  },
  es: {

  },
  ru: {

  }
}

const locale = 'it'
const i18n = new VueI18n({locale, messages})


if (process.env.NODE_ENV === 'development') {
  require('vue-clicky');
}

// const mock = require('../storeimp/api/mocks')
let App = require('../components/app/App')

export const store = createStore()
export const application = new Vue({store, i18n, ...App})
