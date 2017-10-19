import _values from 'lodash/values'

export const getters = {
  locale: state => state.locale.locale,
  decimal: state => state.locale.decimal,
  thousands: state => state.locale.thousands,
  partners: (state, getters, rootState) => _values(rootState['booking'].structureConfig.partnerId),
  currentCategory: (state, getters, rootState) => rootState['booking'].structureConfig.defaultCategory
}
