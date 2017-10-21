import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    products: []
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
