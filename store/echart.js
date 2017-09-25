export const state = () => ({
  list: []
})

export const mutations = {
  list (state, payLoad = []) {
    state.list = payLoad
  },
  addToList (state, {item, quantity}) {
    const record = {
      id: item.id,
      quantity,
      item
    }
    state.list.push(record)
  },
  incrementQuantity (state, {index, quantity}) {
    state.list[index].quantity += quantity
  },
  decrementQuantity (state, {index, quantity}) {
    state.list[index].quantity -= quantity
  },
  removeFromList (state, index) {
    state.list = state.list.splice(index, 1)
  }
}

export const actions = {
  addToChart ({commit}, {item,quantity}) {
    commit('addToList', {item, quantity})
  },
  removeFromCart ({commit}, index) {
    commit('removeFromList', index)
  },
  incrementQuantity ({state, commit}, {index, quantity}) {
    commit('incrementQuantity', {index, quantity})
  },
  decrementQuantity ({state, commit}, {index, quantity}) {
    commit('decrementQuantity', {index, quantity})
    let record = state.list[index]
    if (record.quantity <= 0){
      commit('removeFromList', index)
    }
  }
}

export const getters = {}
