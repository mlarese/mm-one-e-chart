export default ({app, store}) => {
  store.dispatch('app/init', {locale: 'it'}, {root: true})
  store.dispatch('shop/init', null, {root: true})
}
