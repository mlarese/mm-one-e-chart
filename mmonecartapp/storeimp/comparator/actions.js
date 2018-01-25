import _keys from 'lodash/keys'
import _delay from 'lodash/delay'
import _toNumber from 'lodash/toNumber'

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {isTest = true,  adults, children, checkin, checkout, boardId, structureId, channels, boBestPrice, absServer, currency = '€'}) {
    boBestPrice = _toNumber(boBestPrice)

    if (isTest) {
      require('../api/comparatormocks')
    }
    const channelKeys = _keys(channels);

    if (channelKeys.length === 0) {
      commit('incrementProgressPercent', 100)
      return
    }

    commit('setTest', isTest)
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
        let interval = 0

        for(let channel in channels){
          _delay(() => dispatch('compare', channels[channel]), interval)

          if (isTest) {
            interval = interval + 800
          }
        }
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
        Children: JSON.stringify( state.children ),
        Boarding: state.boardId
      }
    }

    // console.dir(options)
    const priceNd = 'N.D.'
    return dispatch('api/get', {url, options}, {root: true})
      .then(res => {
        let channelPrice = res.data.reservationAmount
        if (channelPrice !== priceNd) {
          channelPrice = _toNumber(channelPrice)

          if (channelPrice < state.boBestPrice ) {
            channelPrice = priceNd
          }
        }

        if (state.test) {

          let increment = _toNumber(id) * 2 + 10
          if (increment > 100 ) {
            increment = _toNumber(id) / 2 +10
          }

          increment = increment * 1 + 1/_toNumber(id)
          if ( increment * 1 < 10){
            increment = 12
          }

          channelPrice = state.boBestPrice + increment
        }

        commit('setChannelPrice', {id, channelPrice})
      })
      .catch(e => {
        commit('setChannelPrice', {id, priceNd})
        return e
      })
      .then(r => commit('incrementProgressPercent'))

  }
}
