export const getters = {
  locale: state => state.locale.locale,
  decimal: state => state.locale.decimal,
  thousands: state => state.locale.thousands,
  currentCategory: state => state.currentCategory,
  absServer: (state, getters, rootState) => rootState['booking'].absServer
}
