export const getters = {
  categories: state => state.categories,
  category: state => categoryId => {
    const res = state.categories.find(category => category.id === categoryId)
    return res
  }
}
