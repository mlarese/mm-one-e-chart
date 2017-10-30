export const actions = {
  initInsurance ({commit}, {insuranceTotals}) {
    commit('setInsuranceTotals', insuranceTotals)
  },
  addInsurance ({commit, dispatch}, insuranceType) {
    commit('setInsuranceType', insuranceType)
    commit('hasInsurance', true)
  },
  removeInsurance ({commit, dispatch}) {
    commit('setInsuranceType', null)
    commit('hasInsurance', false)
  }
}
