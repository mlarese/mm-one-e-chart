import 'babel-polyfill'
import  'eventsource-polyfill'
import { application, store } from './app'

import {rooms} from '../storeimp/api/fixtures/rooms'
import {rates} from '../storeimp/api/fixtures/rates'
import {roomsAndRates} from '../storeimp/api/fixtures/rooms_and_rates'


import _transform from 'lodash/transform'

let rar = {rates: {}}

_transform(roomsAndRates, (r, v, idx) => {
  //console.log ('v', v,  'k', idx)
  const {multirate_code, multirate_id, multirate_name}  = v
  const {room_code, room_id, room_name} = v
  const {multirate_visibility_start, multirate_visibility_end, multirate_validity_start, multirate_validity_end} = v

  if (!r.rates[multirate_id]) {
    r.rates[multirate_id] = {
      multirate_code,
      multirate_id,
      multirate_name,
      rooms: [],
      periods: []
    }
  }

  r.rates[multirate_id].rooms.push({room_code, room_id, room_name})

  if (r.rates[multirate_id].periods.findIndex(r => r.multirate_validity_start === multirate_validity_start) < 0)
    r.rates[multirate_id].periods.push({multirate_visibility_start, multirate_visibility_end, multirate_validity_start, multirate_validity_end})
}, rar)

console.dir(rar)

store.dispatch('app/init', {rooms, rates, roomsAndRates, structureId: 157 }, {root: true})
  .then(() => application.$mount('#sync-rate-app'))
