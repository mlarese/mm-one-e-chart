import numeral from 'numeral'

export const actions = {
  init ({commit, dispatch}, currentLocale = {thousands: '.', decimal: ',', locale: 'it'}) {
    numeral.locale(currentLocale.locale)
    commit('setLocale', locale)
  }
}
