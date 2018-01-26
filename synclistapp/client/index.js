import 'babel-polyfill'
import  'eventsource-polyfill'
import { application, store } from './app'

store.dispatch('app/init', initSync)
  .then(() => application.$mount('#sync-rate-app'))
