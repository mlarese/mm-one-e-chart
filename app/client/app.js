import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import createStore from '../store'
import 'select2-bootstrap-theme/dist/select2-bootstrap.css'

Vue.use(Vuex)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale,
  messages
})

let App
if (step === 'comparator') {
  require('../storeimp/api/comparatormocks')
  App = require('../components/app/ElementComparator')
} else {
  const mock = require('../storeimp/api/mocks')
  App = require('../components/app/App')

}
export const store = createStore()
export const application = new Vue({store, i18n, ...App})