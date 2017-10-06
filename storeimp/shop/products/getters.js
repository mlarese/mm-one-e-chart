import _filter from 'lodash/filter'
import _keyBy from 'lodash/keyBy'

export const getters = {
  collection: state => _keyBy(state.list, 'id'),
  list: state => state.list,
  currentGroupList: state => _filter(state.list, {[state.groups.field]: state.groups.current}),
  groupsList: state => state.groups.list,
  productAndCart: (state, getters, rootState, rootGetters) => {
    const totalQuantityByProduct = rootGetters['shop/linearcart/totalQuantityByProduct']
    return totalQuantityByProduct
  }
}
