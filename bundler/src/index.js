import Vue from 'vue'
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)

// import and register your component(s)
import App from './components/App'
Vue.customElement('bootstrap-app', App)