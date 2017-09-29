const root = {root: true}

export const actions = {
  init ({dispatch}) {
    const initCalls = [
      dispatch('shop/products/loadGroups', null, root),
      dispatch('shop/products/loadProducts', null, root)
    ]
    return Promise.all(initCalls)
      .then(res => dispatch('tests/test', null, root))
  },
  addProductToCart ({dispatch}, {item, quantity}) {
    dispatch('shop/products/commitProduct', {item, quantity}, root)
    dispatch('shop/ecart/addToCart', {item, quantity}, root)
  },
  removeProductFromCart ({dispatch}, {item, quantity}) {
    dispatch('shop/products/restoreProduct', {item, quantity}, root)
    dispatch('shop/ecart/removeFromCart', {item, quantity}, root)
  },
  decrementCartProductQuantity ({dispatch}, {item, quantity}) {
    dispatch('shop/products/restoreProduct', {item, quantity}, root)
    dispatch('shop/ecart/decrementQuantity', {item, quantity}, root)
  },
  incrementCartProductQuantity ({dispatch}, {item, quantity}) {
    dispatch('shop/products/commitProduct', {item, quantity}, root)
    dispatch('shop/ecart/incrementQuantity', {item, quantity}, root)
  }
}
