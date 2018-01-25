export const absServer = (state, getters, rootState) => rootState.api.servers['abs'] || null

export const getters = {
  isAjax: state => state.isAjax,
  server: state => serverName => state.servers[serverName]
}
