export const getters = {
  locale: state => state.locale.locale,
  decimal: state => state.locale.decimal,
  thousands: state => state.locale.thousands,
  currentCategory: state => state.currentCategory,
  userLanguageCode: state => state.userLanguageCode,
  currentCategoryOb: (state, getters, rootState, rootGetters) => {
    console.log('--- currentCategoryOb getters.currentCategory', getters.currentCategory)
    return rootGetters['categories/category'](getters.currentCategory)
  },
  isCurrentCategorySpecialService: (state, getters) => getters.currentCategory === 0,
  inCartProduct: (state, getters, rootState, rootGetters) => (product) => {
    const isSpecial = rootGetters['products/isProductSpecialService'](product)
    let cartItem

    if(isSpecial) {
      const currentRoomIndex = rootGetters['cart/currentRoomIndex']
      let fn = rootGetters['cart/itemByRowIdProductId']
      cartItem = fn(currentRoomIndex, product.id)
    } else {
      let fn = rootGetters['cart/itemByProductId']
      cartItem = fn(product.id)
    }

    return cartItem
  },
  inCartQuantity: (state, getters) => (product) => {
    const item = getters.inCartProduct(product)
    if (item) {
      return item.quantity * 1
    } else {
      return 0
    }
  }
}
