import {products} from '../api/fixtures/products'
export const state = () => {
  return {
    name: 'tests'
  }
}

export const mutations = { }
const root = {root: true}

export const actions = {
  test: ({dispatch, getters}) => {
    dispatch('testAddProductToCart')
    dispatch('testRemoveProductFromCart')
    dispatch('testApiErrors')
  },
  add: ({dispatch}, {rowId = 240, roomDescription = 'triple', quantity = 2, roomPrice = 1200, roomId = 1, productId = 2}) => {
    let item = products.find(product => product.productId === productId)
    const {inventory, productId: productType, productPrice, productName} = item
    const cartItem = {inventory, quantity, productId, productType, productPrice, productName, rowId, roomId, roomPrice, roomDescription}

    dispatch('shop/linearcart/addToCart', cartItem, root)
  },
  testApiErrors: ({dispatch}) => {
    dispatch('api/get', '/testerror500', root)
      .then(res => {
        console.log('then testerror500')
        return res
      })
      .catch(err => {
        return err
      })
  }
}

export const getters = {
  products: (state, getters, rootState) => {
    return rootState.shop.products.list
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state
}
