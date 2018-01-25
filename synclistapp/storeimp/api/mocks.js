import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {rooms} from './fixtures/rooms'
import {rates} from './fixtures/rates'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/rates').reply(config => [200, rates])
  .onGet('/rooms').reply(config => [200, rooms])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
