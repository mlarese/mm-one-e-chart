export const state = () => ({
  list: []
})

export const mutations = {
  setList (state, payLoad = []) {
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
    if (index >= 0) {
      state.list.splice(index, 1)
    }
  }
}
