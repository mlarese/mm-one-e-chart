import numeral from 'numeral'

export const changeLocale = (locale) => {
  if (locale === 'en') {
    locale = 'en-gb'
  }
  require('numeral/locales/'+locale)
  numeral.locale(locale)

  return numeral.localeData()
}
