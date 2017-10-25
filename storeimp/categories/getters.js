export const getters = {
  categories: state => state.categories,
  category: state => categoryId => {
    const res = state.categories.find(category => category.id * 1 === categoryId * 1)
    return res
  }
}
