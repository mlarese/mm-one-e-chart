import _keys from 'lodash/keys'
import _delay from 'lodash/delay'
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {adults, children, checkin, checkout, boardId, structureId, channels, boBestPrice, absServer, currency = '€'}) {
    boBestPrice = Math.floor(boBestPrice)

    if (channels.length === 0) {
      commit('incrementProgressPercent', 100)
      return
    }

    commit('setChannels', channels)
    commit('setBoBestPrice', boBestPrice)
    commit('setCurrency', currency)
    commit('setStructureId', structureId)
    commit('setRoomId', roomId)
    commit('setCheckin', checkin)
    commit('setCheckout', checkout)
    commit('setAdults', adults)
    commit('setChildren', children)
    commit('setBoardId', boardId)
    commit('setSingleIncrement', Math.floor(100/channels.length))

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        let allCalls = []
        for(let channel in channels){
          allCalls.push(dispatch('compare', channel))
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
        BoardId: state.boardId
      }
    }

    return dispatch('api/get', {url}, {root: true})
      .then(res => {
        const channelPrice = Math.floor(res.data)
        commit('setChannelPrice', {id, channelPrice})
        commit('incrementProgressPercent')
      })

  }
}
