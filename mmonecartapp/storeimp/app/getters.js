import {ROW_ID_PAY_LATER} from '../cart/rowIdTypes'

export const getters = {
  step: state => state.step,
  infoText: state => state.infoText,
  isStepInsurance: state => state.step === 'insurance',
  isStep3: state => state.step === 'step3',
  isToPayApart: state => product => (product.topayapart * 1 === 1),
  recalculateInsurance: (state, getters, rootState, rootGetters) => getters.isStepInsurance || rootGetters['cart/hasInsurance'],
  nextStep: state => state.nextStep,
  locale: state => state.locale.locale,
  structureConfig: (state, getters,  rootState, rootGetters) => rootGetters['booking/structureConfig'],
  decimal: state => state.locale.decimal,
  currency: (state, getters) => getters.structureConfig.currencyUTF8,
  thousands: state => state.locale.thousands,
  currentCategory: state => state.currentCategory,
  userLanguageCode: state => state.userLanguageCode,
  currentCategoryOb: (state, getters, rootState, rootGetters) => {
    return rootGetters['categories/category'](getters.currentCategory)
  },
  isCurrentCategorySpecialService: (state, getters) => getters.currentCategory === 0,
  inCartProduct: (state, getters, rootState, rootGetters) => (product) => {
    const isSpecial = rootGetters['products/isProductSpecialService'](product)
    let cartItem

    if(isSpecial) {
      let rowId = rootGetters['cart/currentRoomIndex']
      if (getters.isToPayApart(product)) {
        rowId = ROW_ID_PAY_LATER + rowId
      }
      let fn = rootGetters['cart/itemByRowIdProductId']
      cartItem = fn(rowId, product.id)
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
  },
  categories: (state, getters, rootState, rootGetters) => {
    return rootGetters['categories/categoriesByStep'](getters.step)
  },
  cartLocked: (state, getters) => getters.step === 'step3' && false,
  insuranceLocked: (state, getters) => getters.step === 'step3' && false
}
