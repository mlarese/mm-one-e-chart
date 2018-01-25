import _values from 'lodash/values'
export const getters = {
  channels: state => _values(state.channels),
  channelsCount: (state, getters) => getters.channels.length || 0,
  comparationDone: state => state.progressPercent === 100,
  progressPercent: state => state.progressPercent
}
