const root = {root: true}

export const actions = {
  init ({dispatch}) {
    return dispatch('shop/products/loadGroups', null, root)
  }
}
