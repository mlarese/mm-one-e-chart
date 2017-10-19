import _get from 'lodash/get'

export const getters = {
  name: state => state.name,
  products: (state, getters) => {
    return getters['products/list']
  },
  productsKeyList: (state, getters) => {
    return getters['products/keyList']
  },
  productAndCart: (state, getters, rootState, rootGetters) => productId => {
    const product = getters.productsKeyList[productId]
    if (!product) {
      return {product: {}}
    }

    const keyListQuantityByProduct = rootGetters['shop/linearcart/totalQuantityByProduct']
    const cart = _get(keyListQuantityByProduct, productId, 0)
    const inventory = product.inventory || 0
    const available = inventory - cart
    const productName = product.productName
    const productPrice = product.productPrice

    return {
      product,
      productId,
      inventory,
      available,
      cart,
      productName,
      productPrice
    }
  }
}
