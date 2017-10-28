// Fake test parameters
import {products} from '../storeimp/api/fixtures/products'
import {ROW_ID_ECOMMERCE, ROW_ID_INSURANCE, ROW_ID_PAY_LATER} from '../storeimp/cart/rowIdTypes'
const locale = 'it'
const structure = {
  structureId: 1,
  portalId: 1
}
const absServer = 'https://reservation.abs.tmp'

let cart = {
  id: 1,
  numOfRooms: 2,
  rooms: [
    {rowId: 129, name: 'Doppia con vista', treatment: 'BB', price: 1200, photo: '', pax: ''},
    {rowId: 2129, name: 'Singola con vista', treatment: 'BB', price: 300, photo: '', pax: ''}
  ],
  insurance: {
    hasInsurance: true,
    insuranceType: 'protection',
    totals: {
      protection: 52.28,
      protectionPlus: 153.20
    }
  },
  items: [
    {...products[0], quantity: 2, rowId: 0},
    {...products[1], quantity: 2, rowId: 0},
    {...products[2], quantity: 1, rowId: 1},
    {...products[3], quantity: 1, rowId: 1},
    {...products[4], quantity: 3, rowId: ROW_ID_PAY_LATER},
    {...products[4], quantity: 3, rowId: ROW_ID_INSURANCE},
    {...products[4], quantity: 3, rowId: ROW_ID_ECOMMERCE}
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
