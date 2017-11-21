import _keys from 'lodash/keys'
import _delay from 'lodash/delay'
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {adults, children, checkin, checkout, boardId, structureId, channels, boBestPrice, absServer, currency = '€'}) {
    boBestPrice = Math.floor(boBestPrice)

    const channelKeys = _keys(channels);

    if (channelKeys.length === 0) {
      commit('incrementProgressPercent', 100)
      return
    }

    commit('setChannels', channels)
    commit('setBoBestPrice', boBestPrice)
    commit('setCurrency', currency)
    commit('setStructureId', structureId)
    commit('setCheckin', checkin)
    commit('setCheckout', checkout)
    commit('setAdults', adults)
    commit('setChildren', children)
    commit('setBoardId', boardId)
    commit('setSingleIncrement', Math.floor(100/channelKeys.length))

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        let allCalls = []
        for(let channel in channels){
          allCalls.push(dispatch('compare', channels[channel]))
        }
        Promise.all(allCalls)
          .then(ret => commit('incrementProgressPercent', 100))
      })
  },
  compare ({commit, state, dispatch, getters}, {name, id}) {
    const url = '/booking/comparator/compare'
    const options = {
      headers: {
        StructureId: state.structureId,
        ChannelId: id,
        Checkin: state.checkin,
        Checkout: state.checkout,
        Adults: state.adults,
        Children: state.children,
        Boarding: state.boardId
      }
    }

    return dispatch('api/get', {url, options}, {root: true})
      .then(res => {
        let channelPrice = res.data.reservationAmount
        if (channelPrice !== 'N.D.') {
          channelPrice = Math.floor(channelPrice)
        }
        commit('setChannelPrice', {id, channelPrice})
        commit('incrementProgressPercent')
      })

  }
}
