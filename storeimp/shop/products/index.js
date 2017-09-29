/**
 * record = {
 *  id
 *  title
 *  description
 *  inventory
 *  image
 *  group
 *  price
 * }
 */

export const state = () => ({
  groups: {
    field: 'group',
    list: [],
    current: ''
  },
  list: []
})

export const mutations = {
  setCurrentGroup (state, payLoad) {
    state.groups.current = payLoad
  },
  setList (state, payLoad = []) {
    state.list = payLoad
  },
  setGroupList (state, payLoad = []) {
    state.groups.list = payLoad
  },
  incrementInventory (state, {item, quantity}) {
    state.list
      .find(product => product.id === item.id)
      .inventory += quantity
  },
  decrementInventory (state, {item, quantity}) {
    state.list
      .find(product => product.id === item.id)
      .inventory -= quantity
  }
}
