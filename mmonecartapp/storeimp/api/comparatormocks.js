import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdapter(axios, {delayResponse: 800})

mock
  .onGet('/booking/comparator/compare').reply(config => [200, {"reservationAmount":"653"}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'comparatormock'
