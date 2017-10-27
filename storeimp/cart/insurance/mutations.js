export const mutations = {
  hasInsurance (state, flag) {
    state.cart.insurance.hasInsurance = flag
  },
  setInsuranceTotalPax (state, payLoad) {
    state.cart.insurance.totalPax = payLoad
  },
  setInsuranceGuests (state, payLoad) {
    state.cart.insurance.guests = payLoad
  },
  setInsuranceType (state, payLoad) {
    state.cart.insurance.insuranceType = payLoad
  },
  setInsuranceTotal (state, payLoad) {
    state.cart.insurance.total = payLoad
  }
}
