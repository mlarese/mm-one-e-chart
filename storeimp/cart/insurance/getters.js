export const getters = {
  insuranceType: state => '', //state.cart.insurance.insuranceType,
  insuranceTotal: (state, getters) => 0, //state.cart.insurance.totals[getters.insuranceType],
  protectionTotal: (state, getters) => 0, //state.cart.insurance.totals['protection'],
  protectionPlusTotal: (state, getters) => 0, //state.cart.insurance.totals['protectionPlus'],
  insuranceTotals: (state, getters) => {} //state.cart.insurance.totals
}
