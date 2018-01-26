import {changeLocale} from '../../assets/localehlp'
import _transform from 'lodash/transform'

const transformRoomsAndRates = (roomsAndRates) => {
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

  return rar.rates
}

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {roomsAndRates = null, ui = null, structureId, onlyMultiRate = false}) {
    if (roomsAndRates) {
      commit('setRoomsAndRates', transformRoomsAndRates(roomsAndRates))
    }

    commit('setStructureId', structureId)
    commit('setOnlyMultiRate', onlyMultiRate)

    if (ui) {
      commit('mergeUi', ui)
    }
  }
}