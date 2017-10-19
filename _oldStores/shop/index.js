import {actions} from './actions'
import {getters} from './getters'
import linearcart from './linearcart'
import products from './products'

export const state = () => ({
  name: 'shop name',
  id: 'shop'
})

export const mutations = {
}

export const modules = {
  linearcart,
  products
}

export default {
  namespaced: true,
  modules,
  mutations,
  actions,
  getters,
  state: {
    name: 'shop name',
    id: 'shop'
  }
}
