export default ({app, store}) => {
  store.dispatch('shop/init', null, {root: true})
}
