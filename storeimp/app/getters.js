export const getters = {
  locale: state => state.locale.locale,
  decimal: state => state.locale.decimal,
  thousands: state => state.locale.thousands,
  currentCategory: state => state.currentCategory,
  userLanguageCode: state => state.userLanguageCode,
  currentCategoryOb: (state, getters, rootState, rootGetters) => rootGetters['categories/category'](getters.currentCategory)
}
