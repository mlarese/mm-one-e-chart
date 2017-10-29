export const actions = {
  init ({commit}, structureConfig) {
    console.log('-- structure.init')
    commit('setStructureConfig', structureConfig)
    commit('setInited')

    return Promise.resolve({})
  }
}
