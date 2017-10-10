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
  add: ({dispatch, getters}) => {
    let item = getters.products.find(product => product.product_id === 22)
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: {reservation_detail_id: 240, reservation_detail_code: 'triple', reservation_detail_price: 1200}}, root)
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
  },
  testAddProductToCart: ({dispatch, getters}) => {
    const products = getters.products
    const sng = {reservation_detail_id: 210, reservation_detail_code: 'sng', reservation_detail_price: 1200}
    const dbl = {reservation_detail_id: 230, reservation_detail_code: 'dbl', reservation_detail_price: 1400}

    let item = products.find(product => product.product_id === 2)
    dispatch('shop/linearcart/addToCart', {item, quantity: 2, room: sng}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 4, room: sng}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 6, room: sng}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 2, room: dbl}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: dbl}, root)

    item = products.find(product => product.product_id === 4)
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: sng}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 5, room: sng}, root)
  },
  testRemoveProductFromCart: ({dispatch, getters}) => {
  },
  remove: ({dispatch, getters}) => {
    const toRemove = {rowId: 210, productId: 2, quantity: 1}
    dispatch('shop/linearcart/removeFromCart', toRemove, root)
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
