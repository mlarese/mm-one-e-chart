import _filter from 'lodash/filter'
import _keyBy from 'lodash/keyBy'

export const getters = {
  keyList: state => _keyBy(state.list, 'product_id'),
  list: state => state.list,
  currentGroupList: state => _filter(state.list, {[state.groups.field]: state.groups.current}),
  groupsList: state => state.groups.list
}
