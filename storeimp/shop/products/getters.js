import _filter from 'lodash/filter'

export const getters = {
  list: state => state.list,
  currentGroupList: state => _filter(state.list, {[state.groups.field]: state.groups.current}),
  groupsList: state => state.groups.list
}
