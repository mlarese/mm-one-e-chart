import _values from 'lodash/values'
import _intersectionBy from 'lodash/intersectionBy'

let counter = 0
export const getters = {
  canSync: (s, g) => (g.sourceRateId && g.sourceRoomId),
  roomsList: (state, getters) => {
    if(getters.targetRate.rooms && getters.sourceRate.rooms) {
      return _intersectionBy(getters.targetRate.rooms, getters.sourceRate.rooms, 'room_id')
    }
    return []
  },
  hasRooms: (state, getters) => getters.roomsList.length >0,
  targetRateId: state => state.ui.targetRate,
  sourceRateId: state => state.ui.sourceRate ,
  sourceRoomId: state => state.ui.sourceRoom ,
  targetRate: (state, getters) => state.roomsAndRates[getters.targetRateId] || {},
  sourceRate: (state, getters) => state.roomsAndRates[getters.sourceRateId] || {},
  rateCommonRooms: (s,g) => rate => _intersectionBy(rate.rooms, g.targetRate.rooms, 'room_id'),
  hasRateRoomsInCommonWithSource: (s, g) => rate => g.rateCommonRooms(rate).length > 0,
  ratesWithCommonRooms: (s, g) => g.rates.filter(r => g.hasRateRoomsInCommonWithSource(r)),
  rates: (state, getters) => _values(state.roomsAndRates).filter(r => r.multirate_id != getters.targetRateId )
}
