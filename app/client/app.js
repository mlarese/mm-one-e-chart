import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'
import createStore from '../store'
import 'select2-bootstrap-theme/dist/select2-bootstrap.css'
import VuePaginate from 'vue-paginate'
import axios from 'axios'
import _isString from 'lodash/isString'

Vue.use(VuePaginate)
Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(Notifications)


const messages = {
  it: {
    "The insurance policy payment is separate from the reservation process" : "Il pagamento della polizza assicurativa avviene in modalità separata" ,
    "Total Insurance price"  : "Totale assicurazione",
    "Online booking portals prices"  : "Prezzo dei portali online",
    "Select"  : "Selezione",
    "Coupon"  : "Codice sconto",
    'From this site you can book at the best price on the web': "Prenotando in questo sito sei sicuro di prenotare alla migliore tariffa del web",
    'choose below the accommodation that best suits your needs': "scegli qui sotto la sistemazione più adatta alle tue esigenze",
    'before you buy': "prima dell’acquisto",
    'read the information leaflet': 'legga il fascicolo informativo',
    'For just': 'A soli',
    'Book': 'Prenota',
    'Comparing prices': 'Sto comparando i prezzi',
    'Official web site': 'Sito web ufficiale',
    'Best price Guaranteed': 'Miglior prezzo garantito',
    'per reservation': 'per prenotazione',
    'per room/night': 'per camera/notte',
    'per day': 'per giorno',
    'per person': 'per persona',
    'Payment on arrival at the tourist facility on check-in': 'Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in',
    'Choose the services that will make your stay a unique experience, otherwise press the “Continue” button.':'Scegli i servizi che renderanno unico il tuo soggiorno, altrimenti premi il pulsante "prosegui".',
    'Your stay': 'Il tuo soggiorno',
    'OB': 'Camera senza colazione',
    'BB': 'Camera e colazione',
    'HB': 'Mezza pensione',
    'FB': 'Pensione completa',
    'from': 'da',
    'Q.ty': 'Q.ta',
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
    'FB': 'Full board'
  },
  es: {
    'Official web site': 'Sitio web oficial',
    'Best price Guaranteed': 'Mejor Precio Garantizado',
    'From this site you can book at the best price on the web': "Desde este sitio web puede reservar al mejor precio online",
    'choose below the accommodation that best suits your needs': "seleccione abajo el alojamiento mejor para sus necesidades",
    "Online booking portals prices"  : "Precios de sitios de reserva online"
  },
  ru: {
    'Official web site': 'Официальный вебсайт',
    'Best price Guaranteed': 'ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ!',
    'From this site you can book at the best price on the web': "На этом вебсайте вы можете забронировать номер с гарантией лучшей цены",
    'choose below the accommodation that best suits your needs': "выберите самый подходящий вариант размещения из списка ниже!",
    "Online booking portals prices"  : "Цены на сайтах онлайн-бронирования"
  }
}

const i18n = new VueI18n({locale, messages})


/**
console.dir(i18n)

axios.get('./locale/it.json',{responseType: 'text'})
  .then(res => {
    let msgs = res.data
    i18n.setMessages(msgs)
  })
**/


let App
if (step === 'comparator') {
  App = require('../components/app/ElementComparator')
} else if (step === 'step3') {
  App = require('../components/app/AppStep3')
} else {
  // const mock = require('../storeimp/api/mocks')
  App = require('../components/app/App')

}
export const store = createStore()
export const application = new Vue({store, i18n, ...App})
