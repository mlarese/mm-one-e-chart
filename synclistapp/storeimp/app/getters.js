import _values from 'lodash/values'

export const getters = {
  targetRate: state => state.ui.targetRate,
  rates: (state, getters) => _values(state.roomsAndRates).filter(r => r.multirate_id != getters.targetRate ) ,
  currentRooms: state => {
    return []
  }
}
