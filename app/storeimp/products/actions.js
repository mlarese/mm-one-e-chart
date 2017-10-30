export const actions = {
  loadProductsOrServices ({dispatch, commit, getters}, {
    itemsPerPage,
    page,
    structureId,
    portalId,
    category,
    userLanguageCode,
    itemId = null,
    collection = null
  }) {
    console.log('--- products.loadProductsOrServices')
    commit('setPage', 0)

    if (getters.isCategorySpecialService(category)) {
      return dispatch('loadSpecialServices', {portalId, structureId, userLanguageCode, itemId})
        .then(res => {
          commit('setProducts', res.data)
          commit('setPage', 22)
          return res
        })
    } else {
      return dispatch('loadEcommerceProducts', {itemsPerPage, page, category, userLanguageCode, collection, itemId})
        .then(res => {
          commit('setProducts', res.data)
          commit('setPage', 0)
          return res
        })
    }
  },
  loadSpecialServices ({commit, dispatch}, {structureId, portalId, userLanguageCode, itemId = null}) {
    let url = `/booking/specialservices`

    if (itemId !== null) {
      url = `/booking/specialservices/${itemId}`
    }
    const options = {
      headers: {
        StructureId: structureId,
        PortalId: portalId,
        UserLanguageCode: userLanguageCode
      }
    }
    return dispatch('api/get', {url, options}, {root: true})
      .then(res => res)
  },
  loadEcommerceProducts ({dispatch, commit, getters}, {
    category,
    itemId = null,
    userLanguageCode,
    collection = null,
    itemsPerPage = null,
    page = null
  }) {
    const {shopId, id, partnerId} = category

    let url = `/catalog/products`
    if (itemId !== null) {
      url = `/catalog/products/${itemId}`
    }

    const options = {
      headers: {
        ShopId: shopId,
        UserLanguageCode: userLanguageCode,
        PartnerId: partnerId,
        Collection: collection,
        CategoryId: id
      }
    }

    if (page !== null) {
      options.headers.Page = page
    }
    if (itemsPerPage !== null) {
      options.headers.ItemsPerPage = itemsPerPage
    }

    const serverName = shopId
    return dispatch('api/get', {url, options, serverName}, {root: true})
      .then(res => res)
  },
  changePaginationPage ({commit}, page) {
    commit('setPage', page)
    return Promise.resolve({})
  },
  selectProduct ({dispatch, commit}, payLoad) {
    dispatch('loadProductsOrServices', payLoad)
      .then(res => {
        commit('setSelectedProduct', res.data)
        return res
      })
  }
}
