export const mutations = {
  setInsuranceType (state, payLoad) {
    state.cart.insurance.type = payLoad
  },
  setAmount (state, payLoad) {
    state.cart.insurance.amount = payLoad
  },
  setPremium (state, payLoad) {
    state.cart.insurance.premium = payLoad
  },
  setContract (state, payLoad) {
    state.cart.insurance.contract = payLoad
  },
  setInsuranceConfig (state, payLoad) {
    state.insuranceConfig = payLoad
  }
}
