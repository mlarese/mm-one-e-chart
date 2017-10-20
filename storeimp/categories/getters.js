export const getters = {
  category: state => categoryId => {
    const res = state.categories.find(category => category.id === categoryId)
    return res
  }
}
