import _forEach from 'lodash/forEach'

export const actions = {
  loadCategories ({commit, dispatch, rootGetters}, {partners = [], userLanguageCode}) {
    console.log('--- categories.loadCategories')
    const loadCategoriesActions = []
    const url = '/catalog/partner/categories'

    _forEach(partners, partner => {
      const options = {
        headers: {
          ShopId: partner.shopId,
          UserLanguageCode: userLanguageCode,
          PartnerId: partner.partnerId
        }
      }
      let serverName = partner.shopId
      loadCategoriesActions.push(dispatch('api/get', {url, options, serverName}, {root: true}))
    })

    return Promise.all(loadCategoriesActions)
      .then(responses => {
        let categories = []
        _forEach(responses, ({data}) => categories.push(...data))
        return categories
      })
      .then(categories => commit('setCategories', categories))
  }
}