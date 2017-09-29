export const getters = {
  name: state => state.name,
  products: (state, getters) => {
    return getters['products/list']
  }
}
