export const actions = {
  loadProductsOrServices ({dispatch, commit, getters}, {
    itemsPerPage,
    page,
    structureId,
    portalId,
    category,
    userLanguageCode,
    collection = null
  }) {
    console.log('--- products.loadProducts')

    if (category.id === 0) {
      return dispatch('loadSpecialServices', {portalId, structureId, userLanguageCode})
        .then(res => {
          commit('setProducts', res.data)
          return res
        })
    } else {
      return dispatch('loadEcommerceProducts', {itemsPerPage, page, category, userLanguageCode, collection})
        .then(res => {
          commit('setProducts', res.data)
          return res
        })
    }
  },
  loadSpecialServices ({commit, dispatch}, {structureId, portalId, userLanguageCode}) {
    const url = `/booking/specialservices`
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
    itemsPerPage,
    page,
    category,
    userLanguageCode,
    collection = null
  }) {
    const {shopId, id, partnerId} = category
    const url = `/catalog/products/${page}`
    const options = {
      headers: {
        ShopId: shopId,
        UserLanguageCode: userLanguageCode,
        PartnerId: partnerId,
        Collection: collection,
        CategoryId: id,
        ItemsPerPage: itemsPerPage
      }
    }

    const serverName = shopId
    return dispatch('api/get', {url, options, serverName}, {root: true})
      .then(res => res)
  }
}
