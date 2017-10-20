export const actions = {
  loadProducts ({dispatch, commit, getters}, {category}) {
    console.log('--- products.loadProducts')
    const page = getters.page
    const url = `/catalog/products/${page}`
    console.dir(category)
    return dispatch('api/get', {url, serverName: category.shopId}, {root: true})
  }
}
