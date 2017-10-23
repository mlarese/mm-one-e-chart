import {changeLocale} from '../../assets/localehlp'

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {locale = 'it', structureConfig: structureOptions, store, absServer}) {
    console.log('-- app.init')
    const localeData = changeLocale(locale)
    commit('setLocale', {...localeData.delimiters, locale})

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        return dispatch('structure/init', structureOptions, {root: true})
          .then(() => {
            const configActions = [
              dispatch('booking/loadFlowSetup', structureOptions, {root: true}),
              dispatch('booking/loadStructureConfig', structureOptions, {root: true})
            ]
            return Promise.all(configActions)
              .then(() => {
                return dispatch('categories/loadCategories', {partners: rootGetters['booking/partners']}, {root: true})
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
      userLanguageCode: rootGetters['structure/userLanguageCode'],
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
      userLanguageCode: rootGetters['structure/userLanguageCode'],
      collection: null,
      itemId
    }

    return dispatch('products/selectProduct', payload, {root: true})
  }
}
