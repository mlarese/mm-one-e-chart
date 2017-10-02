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
    let item = products.find(product => product.id === 2)
    dispatch('shop/addProductToCart', {item, quantity: 2}, root)
    item = products.find(product => product.id === 4)
    dispatch('shop/addProductToCart', {item, quantity: 10}, root)
    item = products.find(product => product.id === 5)
    dispatch('shop/addProductToCart', {item, quantity: 1}, root)
    dispatch('shop/incrementCartProductQuantity', {item, quantity: 40}, root)
  },
  testRemoveProductFromCart: ({dispatch, getters}) => {
    const products = getters.products
    let item = products.find(product => product.id === 2)
    dispatch('shop/removeProductFromCart', {item, quantity: 1}, root)
    item = products.find(product => product.id === 4)
    dispatch('shop/decrementCartProductQuantity', {item, quantity: 2}, root)
  }
}

export const getters = {
  products: (state, getters, rootState) => {
    return rootState.shop.products.list
  }
}
