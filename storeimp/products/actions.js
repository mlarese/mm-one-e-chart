export const actions = {
  loadProducts ({dispatch, commit, getters}, {category}) {
    console.log('--- products.loadProducts')
    const page = getters.page

    if (category.id === 0) {
      const url = `/booking/specialservices`
      return dispatch('api/get', {url}, {root: true})
        .then(res => commit('setProducts', res.data))
    } else {
      const url = `/catalog/products/${page}`
      return dispatch('api/get', {url, serverName: category.shopId}, {root: true})
        .then(res => commit('setProducts', res.data))
    }
  }
}
