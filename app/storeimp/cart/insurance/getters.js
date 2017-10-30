export const getters = {
  hasInsurance: state => state.cart.insurance.insuranceType !== null,
  hasInsuranceProtection: state => state.cart.insurance.insuranceType === 'protection',
  hasInsuranceProtectionPlus: state => state.cart.insurance.insuranceType === 'protectionPlus',
  insuranceType: state => state.cart.insurance.insuranceType,
  insuranceTotal: (state, getters) => state.cart.insurance.totals[getters.insuranceType],
  protectionTotal: (state, getters) => state.cart.insurance.totals['protection'],
  protectionPlusTotal: (state, getters) => state.cart.insurance.totals['protectionPlus'],
  insuranceTotals: (state, getters) => state.cart.insurance.totals
}
