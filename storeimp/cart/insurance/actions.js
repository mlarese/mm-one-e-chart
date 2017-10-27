const prepareGuestRecords = (numPax) => {
  let guests = []
  for (let i = 0; i < numPax; i++) {
    let newGuest = {

    }
    guests.push(newGuest)
  }
  return guests
}

export const actions = {
  addInsurance ({commit, dispatch}, {insuranceType, totalPax, totalAmount}) {
    commit('setInsuranceType', insuranceType)
    commit('setInsuranceTotalPax', totalPax)
    commit('setInsuranceTotal', totalAmount)
    commit('hasInsurance', true)

    const guests = prepareGuestRecords(totalPax)
    commit('setInsuranceGuests', guests)
  },
  removeInsurance ({commit, dispatch}) {
    commit('setInsuranceType', null)
    commit('setInsuranceTotalPax', 0)
    commit('setInsuranceGuests', [])
    commit('setInsuranceTotal', 0)
    commit('hasInsurance', false)
  }
}
