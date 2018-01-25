import {changeLocale} from '../../assets/localehlp'

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {roomsAndRates = null, rooms = null, rates = null, ui = null, structureId, onlyMultiRate = false}) {
    if (rooms) {
      dispatch('rooms/init', {rooms}, {root: true})
    }
    if (rates) {
      dispatch('rates/init', {rates}, {root: true})
    }
    if (roomsAndRates) {
      commit('setRoomsAndRates', roomsAndRates)
    }
    commit('setStructureId', structureId)
    commit('setOnlyMultiRate', onlyMultiRate)

    if (ui) {
      commit('mergeUi', ui)
    }
  }
}