import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {products} from './fixtures/products'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/catalog/products').reply(config => [200, categories])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
