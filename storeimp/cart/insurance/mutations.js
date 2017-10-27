export const mutations = {
  hasInsurance (state, flag) {
    state.cart.insurance.hasInsurance = flag
  },
  setInsuranceType (state, payLoad) {
    state.cart.insurance.insuranceType = payLoad
  },
  setInsuranceTotal (state, payLoad) {
    state.cart.insurance.total = payLoad
  }
}
