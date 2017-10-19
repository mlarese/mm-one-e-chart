export const absServer = (state, getters, rootState) => rootState['api'].absServer

export const getters = {
  isAjax: state => state.isAjax,
  absServer
}
