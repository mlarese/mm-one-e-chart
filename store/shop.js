const root = {root: true}
export const state = () => ({
  name: 'shop name'
})

export const mutations = {

}

export const actions = {
  init ({dispatch}) {
    const initCalls = [
      dispatch('shop/products/loadGroups', null, root),
      dispatch('shop/products/loadProducts', null, root)
    ]

    Promise.all(initCalls)
      .then(res => {
        const item = {id: 1, inventory: 3}
        const quantity = 2
        dispatch('addProductToCart', {item, quantity})
      })
  },
  addProductToCart ({dispatch}, {item, quantity}) {
    dispatch('shop/ecart/addToCart', {item, quantity}, root)
    dispatch('shop/products/addToCart', {item, quantity}, root)
  }
}

export const getters = {
  name: state => state.name
}
