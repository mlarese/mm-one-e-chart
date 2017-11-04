export const getters = {
  hasInsurance: state => (state.cart.insurance.type && state.cart.insurance.type !== ''),
  hasInsuranceProtection: state => state.cart.insurance.type === 'cancel',
  hasInsuranceProtectionPlus: state => state.cart.insurance.type === 'all',
  insuranceType: state => state.cart.insurance.type,
  insuranceAmount: state => state.cart.insurance.amount,
  insuranceTotal: (state, getters) => state.cart.insurance.premium || 0,

  insurancePriceCancel: (state, getters) => state.insuranceConfig.price_cancel,
  insurancePriceCancelDeposit: (state, getters) => state.insuranceConfig.price_cancel_deposit,
  insurancePriceCancelPid: (state, getters) => state.insuranceConfig.price_cancel_pid,
  insurancePriceCancelDepositPid: (state, getters) => state.insuranceConfig.price_cancel_deposit_pid,
  insurancePriceCancelDepositUrl: (state, getters) => state.insuranceConfig.price_cancel_deposit_url,
  insurancePriceCancelUrl: (state, getters) => state.insuranceConfig.price_cancel_url,

  insurancePriceAllDeposit: (state, getters) => state.insuranceConfig.price_all_deposit,
  insurancePriceAll: (state, getters) => state.insuranceConfig.price_all,
  insurancePriceAllPid: (state, getters) => state.insuranceConfig.price_all_pid,
  insurancePriceAllDepositPid: (state, getters) => state.insuranceConfig.price_all_deposit_pid,
  insurancePriceAllDepositUrl: (state, getters) => state.insuranceConfig.price_all_deposit_url,
  insurancePriceAllUrl: (state, getters) => state.insuranceConfig.price_all_url,
  insuranceSourceField: (state, getters) => {
    let type = getters.insuranceType
    let amount = '_' + getters.insuranceAmount
    if (amount === 'total') amount = ''
    return `price_${type}${amount}`
  }
}
