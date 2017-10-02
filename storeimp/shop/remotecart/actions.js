import _get from 'lodash/get'

const root = {root: true}

export const actions = {
  loadRooms ({commit, dispatch}) {
    return dispatch('api/get', '/resrooms', root)
      .then(res => {
        const rooms = _get(res, 'data.data', res.data)
        rooms.foreach((room, index) => commit('addRoomToCart', {room, rowId: room.rowId}))
      })
  },
  loadCarts ({commit, dispatch}) {
  }
}
