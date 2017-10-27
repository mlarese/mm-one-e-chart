export const actions = {
  addInsurance ({commit, dispatch}, {insuranceType, totalAmount}) {
    commit('setInsuranceType', insuranceType)
    commit('setInsuranceTotal', totalAmount)
    commit('hasInsurance', true)
  },
  removeInsurance ({commit, dispatch}) {
    commit('setInsuranceType', null)
    commit('setInsuranceTotal', 0)
    commit('hasInsurance', false)
  }
}
