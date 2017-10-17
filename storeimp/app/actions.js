import {changeLocale} from '../../assets/localehlp'

export const actions = {
  init ({commit, dispatch}, {locale = 'it'}) {
    const localeData = changeLocale(locale)
    const {thousands, decimal} = localeData.delimiters
    commit('setLocale', {locale, thousands, decimal})
  }
}
