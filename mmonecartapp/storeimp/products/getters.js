export const getters = {
  page: state => state.pagination.page,
  itemsPerPage: state => state.pagination.itemsPerPage,
  products: state => state.products,
  isCategorySpecialService: state => category => category.id * 1 === 0,
  isProductSpecialService: state => product => product.type === 'specialservice',
  hasVariants: (state, getters) => ({id}) => {
    // prodotto spa
    // if (id*1 === 2166) { return true }
    return false
  }
}
