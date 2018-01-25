import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    products: [],
    selectedProduct: {},
    pagination: {
      page: 0,
      itemsPerPage: 10
    }
  }
}

export const mutations = {
  setProducts (state, payLoad) {
    state.products = payLoad
  },
  setPage (state, payLoad = 0) {
    state.pagination.page = payLoad
  },
  setSelectedProduct (state, payLoad = {}) {
    state.selectedProduct = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
