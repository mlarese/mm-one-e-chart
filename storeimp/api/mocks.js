import MockAdapter from 'axios-mock-adapter'
import {instance} from './axios'
import {productsFn} from './fixtures/products'
import {groups} from './fixtures/groups'
import {cart, cartPost} from './fixtures/cart'

const mock = new MockAdapter(instance, {delayResponse: 300})

mock
  .onGet('/groups').reply(config => [200, groups])
  .onGet('/cart').reply(config => [200, cart])
  .onPost('/cart').reply(cartPost)
  .onGet('/products').reply(productsFn)
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
