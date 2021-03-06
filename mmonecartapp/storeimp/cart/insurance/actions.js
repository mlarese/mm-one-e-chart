export const actions = {
  addInsurance ({commit, dispatch}, {type, amount, premium, contract}) {
    commit('setInsuranceType', type)
    commit('setAmount', amount)
    commit('setPremium', premium)
    commit('setContract', contract)
    dispatch('cloneToRemote')
  },
  removeInsurance ({commit, dispatch}) {
    commit('setInsuranceType', '')
    commit('setAmount', '')
    commit('setPremium', 0)
    commit('setContract', '')
    dispatch('cloneToRemote')
  },
  recalculateInsurance ({commit, dispatch, getters, rootGetters}) {
    return dispatch('quoteInsurance')
      .then(res => dispatch('setPremiumFromConfig'))
  },
  setPremiumFromConfig ({commit, dispatch, getters, rootGetters, state}) {

    if (getters.hasInsurance) {
      let field = getters.insuranceSourceField
      commit('setPremium', state.insuranceConfig[field] * 1)
    }
  },
  quoteInsurance ({commit, dispatch, getters, rootGetters}) {
    const url = '/booking/allianz/quote'
    const userLanguageCode = rootGetters['app/userLanguageCode']
    const checkIn = rootGetters['app/checkin']
    const checkOut = rootGetters['app/checkout']
    const childrenData = rootGetters['app/childrenData']
    const adults = rootGetters['app/adultsCount']
    const total = getters.cartTotal
    const insuranceType = 0

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
        Children: JSON.stringify( childrenData )
      }
    }
    return dispatch('api/get', {url, options}, {root: true})
      .then(res => {
        commit('setInsuranceConfig', res.data)
        return res
      })
  }
}
