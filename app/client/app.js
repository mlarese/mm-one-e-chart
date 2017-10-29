import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import App from '../components/app/App'
import createStore from '../store'
import 'select2/dist/css/select2.css'
import 'select2-bootstrap-theme/dist/select2-bootstrap.css'

Vue.use(Vuex)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale,
  messages
})


export const store = createStore()
export const application = new Vue({store, i18n, ...App})