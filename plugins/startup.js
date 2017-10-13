export default ({app, store}) => {
  store.dispatch('app/init', {thousands: '.', decimal: ',', locale: 'it'}, {root: true})
  store.dispatch('shop/init', null, {root: true})
}
