// Fake test parameters
import {products} from '../storeimp/api/fixtures/products'
const locale = 'it'
const structure = {
  structureId: 1,
  portalId: 1
}
const absServer = 'https://absservername.abs-one.com'
let cart = {
  id: 1,
  items: [
    {...products[2], quantity: 1, rowId: 1},
    {...products[2], quantity: 2, rowId: 2},
    {...products[2], quantity: 2, rowId: 8},
    {...products[3], quantity: 1, rowId: 1},
    {...products[3], quantity: 1, rowId: 2},
    {...products[3], quantity: 1, rowId: 8},
    {...products[4], quantity: 3, rowId: 8},
    {...products[12], quantity: 11, rowId: 8}
  ]
}

export default ({app, store}) => {
  console.log('-- startup')
  return store.dispatch('app/init', {locale, structure, store, absServer, cart}, {root: true})
    .then(() => { console.log('-- startup then') })
}
