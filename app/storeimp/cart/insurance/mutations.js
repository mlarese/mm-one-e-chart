export const mutations = {
  hasInsurance (state, flag) {
    state.cart.insurance.hasInsurance = flag
  },
  setInsuranceType (state, payLoad) {
    state.cart.insurance.insuranceType = payLoad
  },
  setInsure (state, payLoad) {
    state.cart.insurance.insure = payLoad
  },
  setInsuranceTotals (state, payLoad) {
    state.cart.insurance.totals = payLoad
  }
}
