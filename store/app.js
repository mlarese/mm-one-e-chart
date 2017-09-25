const root = {root: true};
export const state = () => ({
  loading: false
})

export const mutations = {
  loading (state, payLoad) {
    state.loading = payLoad
  }
}

export const actions = {
  addProductToChart ({dispatch},product) {
    dispatch('echart/addToList', product, root)
  }
}

export const getters = {}
