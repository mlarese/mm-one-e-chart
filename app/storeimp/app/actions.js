import {changeLocale} from '../../assets/localehlp'

export const actions = {
  init (
    {commit, dispatch, getters, rootGetters},
    {insuranceTotals = null, flowSetup, structureConfig, locale = 'it', structure, store, absServer, cart, step, nextStep}
  ) {
    console.log('-- app.init')

    if (step === 'allianz') {
      step = 'insurance'
    }

    const localeData = changeLocale(locale)
    const userLanguageCode = locale
    commit('setLocale', {...localeData.delimiters, locale})
    commit('setUserLanguageCode', locale)
    commit('setStep', step)
    commit('setNextStep', nextStep)

    if (insuranceTotals !== null) {
      dispatch('initInsurance', {insuranceTotals})
    }

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        return dispatch('structure/init', structure, {root: true})
          .then(() => {
            const configActions = [
              dispatch('cart/init', {cart, ...structure}, {root: true}),
              dispatch('booking/init', {flowSetup, structureConfig}, {root: true})
            ]
            return Promise.all(configActions)
              .then(() => {
                return dispatch('categories/loadCategories', {userLanguageCode, partners: rootGetters['booking/partners']}, {root: true})
                  .then(() => {
                    return dispatch('changeCategory', rootGetters['booking/structureConfig'].defaultCategory)
                  })
              })
          })
      })
  },
  changeCategory ({commit, dispatch}, categoryId) {
    commit('setCurrentCategory', categoryId)
    dispatch('loadPaginatedProductsOrServices')
  },
  changeProductPage ({commit, dispatch}, page) {
    dispatch('products/changePaginationPage', page, {root: true})
      .then(() => dispatch('loadPaginatedProductsOrServices'))
  },
  loadPaginatedProductsOrServices ({commit, dispatch, rootGetters, getters}) {
    console.log('--- app.loadPaginatedProductsOrServices')
    const category = getters.currentCategoryOb

    const payload = {
      itemsPerPage: rootGetters['products/itemsPerPage'],
      page: rootGetters['products/page'],
      structureId: rootGetters['structure/structureId'],
      portalId: rootGetters['structure/portalId'],
      category,
      userLanguageCode: getters['userLanguageCode'],
      collection: null
    }

    return dispatch('products/loadProductsOrServices', payload, {root: true})
  },
  selectProduct ({commit, dispatch, rootGetters, getters}, itemId) {
    console.log('--- app.loadPaginatedProduct')
    const category = getters.currentCategoryOb

    const payload = {
      itemsPerPage: rootGetters['products/itemsPerPage'],
      page: rootGetters['products/page'],
      structureId: rootGetters['structure/structureId'],
      portalId: rootGetters['structure/portalId'],
      category,
      userLanguageCode: getters['userLanguageCode'],
      collection: null,
      itemId
    }

    return dispatch('products/selectProduct', payload, {root: true})
  }
}
