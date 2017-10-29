export const mutations = {
  hasInsurance (state, flag) {
    state.cart.insurance.hasInsurance = flag
  },
  setInsuranceType (state, payLoad) {
    state.cart.insurance.insuranceType = payLoad
  },
  setInsuranceTotals (state, payLoad) {
    state.cart.insurance.totals = payLoad
  }
}
