const root = {root: true};
export const state = () => ({
})

export const mutations = {

}

export const actions = {
  addProductToCart ({dispatch},{item, quantity}) {
    dispatch('shop/ecart/addToCart', {item, quantity}, root)
    dispatch('shop/product/addToCart', {item, quantity}, root)
  }
}

export const getters = {}
