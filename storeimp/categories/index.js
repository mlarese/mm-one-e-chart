import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    categories: []
  }
}

export const mutations = {
  setCategories (state, payLoad) {
    state.categories = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
