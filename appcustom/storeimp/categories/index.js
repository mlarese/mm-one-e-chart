import {actions} from './actions'
import {getters} from './getters'

export const state = () => {
  return {
    categories: [],
    selectedCategory: {}
  }
}

export const mutations = {
  setCategories (state, payLoad) {
    state.categories = payLoad
  },
  setSelectedCategoriy (state, payLoad) {
    state.selectedCategory = payLoad
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
