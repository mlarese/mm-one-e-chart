const root = {root: true}

export const actions = {
  init ({dispatch}) {
    const initCalls = [
      dispatch('shop/products/loadGroups', null, root),
      dispatch('shop/products/loadProducts', null, root)
    ]
    return Promise.all(initCalls)
      .then(res => dispatch('tests/test', null, root))
  }
}
