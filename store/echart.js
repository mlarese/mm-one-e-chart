export const state = () => ({
  list: [],
  record: {}
})

export const mutations = {
  record (state, payLoad = []) {
    state.record = payLoad
  },
  list (state, payLoad = []) {
    state.list = payLoad
  },
  addToList (state, item) {
    state.list.push(item)
  },
  removeFromList (state, index) {
    state.list = state.list.splice(index, 1)
  }
}

export const actions = {}

export const getters = {}
