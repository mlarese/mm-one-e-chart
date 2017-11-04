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
  },
  quoteInsurance ({commit, dispatch, getters, rootGetters}, {total, checkIn, checkOut, adults, children, insuranceType}) {
    const url = '/booking/allianz/quote'
    const userLanguageCode = rootGetters['app/userLanguageCode']

    const options = {
      headers: {
        StructureId: getters.structureId,
        PortalId: getters.portalId,
        UserLanguageCode: userLanguageCode,
        Total: total,
        InsuranceType: insuranceType,
        Adults: adults,
        Checkin: checkIn,
        Checkout: checkOut,
        Children: children
      }
    }
    return dispatch('api/get', {url, options}, {root: true})
  }
}
