import numeral from 'numeral'
import 'numeral/locales/en-gb'
import 'numeral/locales/it'
import 'numeral/locales/fr'
import 'numeral/locales/es'
import 'numeral/locales/de'

export const changeLocale = (locale) => {
  if (locale === 'en') {
    locale = 'en-gb'
  }
  // require('numeral/locales/'+locale)
  numeral.locale(locale)
  return numeral.localeData()
}
