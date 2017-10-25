// Fake test parameters
import {products} from '../storeimp/api/fixtures/products'
const locale = 'it'
const structure = {
  structureId: 1,
  portalId: 1
}
const absServer = 'https://reservation.abs.tmp'

let cart = {
  id: 1,
  items: [
    {...products[1], quantity: 2, rowId: 21},
    {...products[2], quantity: 1, rowId: 31},
    {...products[3], quantity: 1, rowId: 58},
    {...products[4], quantity: 3, rowId: 68}
  ]
}

const flowSetup = {
  stepRoomsEnable: true,
  alternativeRoomsEnable: false,
  stepEcommerceEnable: true,
  stepAllianzEnable: true,
  roomsFirst: true
}

const structureConfig = {
  specialServicesEnabled: false,
  productCatalogOpen: false,
  defaultCategory: 0,
  shops: [2],
  partnerIds: {2: 3},
  ecommerceHosts: {
    2: 'https://ecommerce.abs-one.dev'
  }
}

export default ({app, store}) => {
  console.log('-- startup')
  return store.dispatch('app/init', {
    locale,
    structure,
    store,
    absServer,
    cart,
    structureConfig,
    flowSetup
  }, {root: true})
    .then(() => {
      console.log('-- startup then')
    })
}
