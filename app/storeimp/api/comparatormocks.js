import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdapter(axios, {delayResponse: 500})

mock
  .onGet('/comparator/compare/bookingcom').reply(config => [200, {result: 'ok', value: 0}])
  .onGet('/comparator/compare/tripadvisor').reply(config => [200, {result: 'ok', value: 0}])
  .onGet('/comparator/compare/expedia').reply(config => [200, {result: 'ok', value: 0}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'comparatormock'
