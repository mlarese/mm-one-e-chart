import _forEach from 'lodash/forEach'

export const actions = {
  loadCategories ({commit, dispatch, rootGetters}, {partners = []}) {
    console.log('--- categories.loadCategories')
    const loadCategoriesActions = []

    _forEach(partners, partner => {
      let payLoad = {
        url: `/catalog/${partner}/categories`,
        options: {baseURL: rootGetters['api/absServer']}
      }

      loadCategoriesActions.push(dispatch('api/get', payLoad, {root: true}))
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
