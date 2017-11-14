import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {productsFn, servicesFn, products} from './fixtures/products'
import {categories} from './fixtures/categories'
import {flowSetup, structureConfig} from './fixtures/booking'
import {cart, cartPost} from './fixtures/cart'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/catalog/partner/categories').reply(config => [200, categories])
  .onGet('/catalog/partner/categories/1').reply(config => [200, categories.find(c => c.id === 1)])
  .onGet('/booking/cart').reply(config => [200, cart])
  .onPost('/booking/cart').reply(cartPost)
  .onGet('/booking/specialservices').reply(servicesFn)
  .onGet('/catalog/products').reply(productsFn)
  .onGet('/booking/specialservices/1').reply(config => [200, products.find(p => (p.id === 1 && p.type === 'specialservice'))])
  .onGet('/catalog/products/1').reply(config => [200, products.find(p => (p.id === 1 && p.type === 'simple'))])
  .onGet('/booking/flowSetup').reply(config => [200, flowSetup])
  .onGet('/booking/config').reply(config => [200, structureConfig])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
