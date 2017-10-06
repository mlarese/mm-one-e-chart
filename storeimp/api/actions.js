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
      {product_id: 1, product_name: 'Lavatrice', description: 'Lavatrice carica dall\'alto', inventory: 23, image: '', category_name: 'Elettrodomestici', product_price: 100},
      {product_id: 2, product_name: 'Monitor', description: 'Monitor flat', inventory: 43, image: '', category_name: 'Elettronica', product_price: 100},
      {product_id: 3, product_name: 'Computer pentium 5', description: 'Computer pentium 5', inventory: 33, image: '', category_name: 'Elettronica', product_price: 300},
      {product_id: 4, product_name: 'Piatti piani', description: 'Piatti piani', inventory: 31, image: '', category_name: 'Casalinghi', product_price: 10},
      {product_id: 5, product_name: 'Piatti fondi', description: 'Piatti fondi', inventory: 31, image: '', category_name: 'Casalinghi', product_price: 20},
      {product_id: 11, product_name: 'Notebook pentium 5', description: 'Notebook pentium 5', inventory: 43, image: '', category_name: 'Elettronica', product_price: 500},
      {product_id: 22, product_name: 'Mouse', description: 'Mouse', inventory: 53, image: '', category_name: 'Elettronica', product_price: 400},
      {product_id: 99, product_name: 'Keyboard', description: 'Keyboard', inventory: 63, image: '', category_name: 'Elettronica', product_price: 100},
      {product_id: 1234, product_name: 'Monitor flat', description: 'Monitor flat', inventory: 73, image: '', category_name: 'Elettronica', product_price: 200},
      {product_id: 435, product_name: 'Notebook amd', description: 'Notebook amd', inventory: 83, image: '', category_name: 'Elettronica', product_price: 300}
    ]
    return [200, {data}]
  })
}
