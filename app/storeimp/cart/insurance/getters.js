export const getters = {
  hasInsurance: state => (state.cart.insurance.type && state.cart.insurance.type !== ''),
  hasInsuranceProtection: state => state.cart.insurance.type === 'cancel',
  hasInsuranceProtectionPlus: state => state.cart.insurance.type === 'all',
  insuranceType: state => state.cart.insurance.type,
  insuranceTotal: (state, getters) => 0, // state.cart.insurance.totals[getters.insuranceType],
  protectionTotal: (state, getters) => 0, // state.cart.insurance.totals['protection'],
  protectionPlusTotal: (state, getters) => 0, // state.cart.insurance.totals['protectionPlus'],
  insuranceTotals: (state, getters) => state.cart.insurance.totals,

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
  insurancePriceAllUrl: (state, getters) => state.insuranceConfig.price_all_url
}
