import _values from 'lodash/values'
export const getters = {
  channels: state => _values(state.channels),
  comparationDone: state => state.progressPercent === 100,
  progressPercent: state => state.progressPercent
}
