import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import * as store from './store'
Vue.use(Vuex)

const {render, staticRenderFns} = App
console.dir (App)
const app = new Vue({store, render, staticRenderFns})

app.$mount('#app')