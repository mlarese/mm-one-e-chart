import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'
import createStore from '../store'
import 'select2-bootstrap-theme/dist/select2-bootstrap.css'

Vue.config.devtools = true

Vue.use(Vuex)

Vue.use(VueI18n)

Vue.use(Notifications)

const messages = {
  it: {
    'per reservation': 'per prenotazione',
    'per room/night': 'per camera/notte',
    'per day': 'per giorno',
    'per person': 'per persona',
    'Payment on arrival at the tourist facility on check-in': 'Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in',
    'Choose the services that will make your stay a unique experience, otherwise press the “Continue” button.':'Scegli i servizi che renderanno unico il tuo soggiorno, altrimenti premi il pulsante "prosegui".',
    'Your stay': 'Il tuo soggiorno',
    'OB': 'Camera senza colazione',
    'BB': 'Bed and Breakfast',
    'HB': 'Mezza pensione',
    'FB': 'Pensione completa',
    'from': 'da',
    'continue': 'prosegui',
    'Total Price': 'Totale soggiorno',
    'You are saving': 'Stai risparmiando',
    'Reservation conditions': 'Condizioni di prenotazione',
    'Add': 'Aggiungi',
    'Details': 'Dettaglio',
    'Added': 'Aggiunto',
    'Cancellation of stay': 'Annullamento del soggiorno',
    'Medical expenses': 'Spese mediche',
    'Interruption of stay': 'Interruzione del soggiorno',
    'Refund of penalties': 'Rimborso importo versato',
    '24h support': 'Assistenza 24H',
    'Insurance': 'Assicurazione',
    'Single price': 'Prezzo unitario',
    'More info': 'Maggiori informazioni',
    'Insure': 'Assicura',
    'Account/Deposit': 'Acconto/Caparra',
    'Full stay': 'Tutto il soggiorno',
    'Use Booking protection to insure your stay': 'Per una maggiore serenità consigliamo a tutti i viaggiatori di aggiungere l\’assicurazione di viaggio alla prenotazione'
  },
  en: {
    'OB': 'Only board',
    'BB': 'Bed and Breakfast',
    'HB': 'Half board',
    'FB': 'Full board',
  }
}

const i18n = new VueI18n({
  locale,
  messages
})

let App
if (step === 'comparator') {
  require('../storeimp/api/comparatormocks')
  App = require('../components/app/ElementComparator')
} else {
  // const mock = require('../storeimp/api/mocks')
  App = require('../components/app/App')

}
export const store = createStore()
export const application = new Vue({store, i18n, ...App})