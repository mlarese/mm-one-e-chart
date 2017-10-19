export const actions = {
  loadCategories ({commit, dispatch}) {
    const url = '/catalog/partner/categories'
    return dispatch('api/get', {url}, {root: true})
      .then(res => {
        commit('setCategories', res.data)
      })
  }
}
