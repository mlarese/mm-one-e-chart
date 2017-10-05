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
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: {reservation_detail_id: 230, reservation_detail_code: 'dbl', reservation_detail_price: 1200}}, root)
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

    let item = products.find(product => product.product_id === 2)
    dispatch('shop/linearcart/addToCart', {item, quantity: 2, room: {reservation_detail_id: 210, reservation_detail_code: 'sng', reservation_detail_price: 1200}}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 4, room: {reservation_detail_id: 210, reservation_detail_code: 'sng', reservation_detail_price: 1200}}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 6, room: {reservation_detail_id: 210, reservation_detail_code: 'sng', reservation_detail_price: 1200}}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 2, room: {reservation_detail_id: 230, reservation_detail_code: 'dbl', reservation_detail_price: 1400}}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: {reservation_detail_id: 230, reservation_detail_code: 'dbl', reservation_detail_price: 1400}}, root)

    item = products.find(product => product.product_id === 4)
    dispatch('shop/linearcart/addToCart', {item, quantity: 1, room: {reservation_detail_id: 210, reservation_detail_code: 'sng'}}, root)
    dispatch('shop/linearcart/addToCart', {item, quantity: 5, room: {reservation_detail_id: 210, reservation_detail_code: 'sng'}}, root)
  },
  testRemoveProductFromCart: ({dispatch, getters}) => {
  }
}

export const getters = {
  products: (state, getters, rootState) => {
    return rootState.shop.products.list
  }
}
