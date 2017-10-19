import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    products: [],
    pagination: {
      page: 0,
      itemsPerPage: 10
    }
  }
}

export const mutations = {
  setProducts (state, payLoad) {
    state.products = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
