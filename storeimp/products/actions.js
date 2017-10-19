export const actions = {
  loadProducts ({dispatch, commit, getters}, {currentCategory}) {
    console.log('--- products.loadProducts')
    const page = getters.page
    const url = `https://ecommerceservername.abs-one.com/RESTfulAPI/catalog/products/${page}`
    return dispatch('api/get', {url})
  }
}
