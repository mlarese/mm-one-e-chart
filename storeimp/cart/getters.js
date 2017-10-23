export const getters = {
  id: state => state.cart.id,
  items: state => state.cart.items,
  itemsByRowId: (state, getters) => rowId => getters.items.find(i => i.rowId === rowId) || [],
  itemsByProductId: (state, getters) => productId => getters.items.find(i => i.id === productId) || [],
  itemByRowIdProductId: (state, getters) => (rowId, productId) => getters.itemsByRowId(rowId).find(i => i.id === productId)
}
