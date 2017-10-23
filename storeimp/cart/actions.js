export const actions = {
  init ({commit}, cart) {
    console.log('--- cart.init')
    commit('setCart', cart)
  }
}
