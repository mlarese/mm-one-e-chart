import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {productsFn} from './fixtures/products'
import {categories} from './fixtures/categories'
import {flowSetup, structureConfig} from './fixtures/booking'
import {cart, cartPost} from './fixtures/cart'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/catalog/3/categories').reply(config => [200, categories])
  .onGet('/cart').reply(config => [200, cart])
  .onPost('/cart').reply(cartPost)
  .onGet('/products').reply(productsFn)
  .onGet('/booking/flowSetup').reply(config => [200, flowSetup])
  .onGet('/booking/config').reply(config => [200, structureConfig])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
