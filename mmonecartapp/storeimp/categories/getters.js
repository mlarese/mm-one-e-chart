import _filter from 'lodash/filter'

export const getters = {
  categories: state => state.categories,
  category: state => categoryId => state.categories.find(category => category.id * 1 === categoryId * 1),
  categoriesByStep: state => step => {
    if (step === 'ecommerce') {
      return state.categories
    } else if(step === 'onlyecommerce') {
      return _filter(state.categories, category => category.id * 1 !== 0)
    } else if(step === 'special') {
      return _filter(state.categories, category => category.id * 1 === 0)
    } else {
      return state.categories
    }
  }
}
