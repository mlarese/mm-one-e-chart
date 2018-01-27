import _values from 'lodash/values'
import _intersectionBy from 'lodash/intersectionBy'

let counter = 0
export const getters = {
  roomsList: (state, getters) => {
    if(getters.targetRate.rooms && getters.sourceRate.rooms) {
      return _intersectionBy(getters.targetRate.rooms, getters.sourceRate.rooms, 'room_id')
    }
    return []
  },
  hasRooms: (state, getters) => getters.roomsList.length >0,
  targetRateId: state => state.ui.targetRate,
  sourceRateId: state => {
    return state.ui.sourceRate
  },
  targetRate: (state, getters) => state.roomsAndRates[getters.targetRateId] || {},
  sourceRate: (state, getters) => state.roomsAndRates[getters.sourceRateId] || {},
  rates: (state, getters) => _values(state.roomsAndRates).filter(r => r.multirate_id != getters.targetRateId )
}
