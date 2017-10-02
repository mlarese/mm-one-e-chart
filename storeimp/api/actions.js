import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'app-caller': 'mm-one-chart'}
})

export const actions = {
  get ({commit}, url) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.get(url)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  post ({commit}, url, data) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.post(url, data)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  put ({commit}, url, data) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.put(url, data)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  delete ({commit}, url) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.delete(url)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  }
}

const isMock = true
if (isMock) {
  const mock = new MockAdapter(instance, { delayResponse: 200 })

  mock
    .onGet('/testerror500').reply(500)
    .onGet('/testerror403').reply(403)
    .onGet('/testtimeout').timeout()

  mock.onGet('/groups').reply(config => {
    const data = ['Elettronica', 'Abbigliamento', 'Casalinghi', 'Elettrodomestici']
    return [200, {data}]
  })

  mock.onGet('/products').reply(config => {
    const data = [
      {id: 1, title: 'Lavatrice', description: 'Lavatrice carica dall\'alto', inventory: 3, image: '', group: 'Elettrodomestici', price: 100},
      {id: 2, title: 'Monitor', description: 'Monitor flat', inventory: 3, image: '', group: 'Elettronica', price: 100},
      {id: 3, title: 'Computer pentium 5', description: 'Computer pentium 5', inventory: 3, image: '', group: 'Elettronica', price: 300},
      {id: 4, title: 'Piatti piani', description: 'Piatti piani', inventory: 1, image: '', group: 'Casalinghi', price: 10},
      {id: 5, title: 'Piatti fondi', description: 'Piatti fondi', inventory: 1, image: '', group: 'Casalinghi', price: 20},
      {id: 11, title: 'Notebook pentium 5', description: 'Notebook pentium 5', inventory: 3, image: '', group: 'Elettronica', price: 500},
      {id: 22, title: 'Mouse', description: 'Mouse', inventory: 3, image: '', group: 'Elettronica', price: 400},
      {id: 99, title: 'Keyboard', description: 'Keyboard', inventory: 3, image: '', group: 'Elettronica', price: 100},
      {id: 1234, title: 'Monitor flat', description: 'Monitor flat', inventory: 3, image: '', group: 'Elettronica', price: 200},
      {id: 435, title: 'Notebook amd', description: 'Notebook amd', inventory: 3, image: '', group: 'Elettronica', price: 300}
    ]
    return [200, {data}]
  })
}
