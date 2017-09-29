export const state = () => {
  return {
    isAjax: false,
    error: {},
    hasError: false
  }
}

export const mutations = {
  isAjax (state, payLoad = false) {
    state.ajax = payLoad
  },
  error (state, payLoad = {}) {
    state.ajax = payLoad
  },
  hasError (state, payLoad = false) {
    state.hasError = payLoad
  }
}
