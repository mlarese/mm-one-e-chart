import axios from 'axios'
import './mocks'

export const actions = {
  get ({commit, getters}, {url, options = {}, serverName = 'abs'}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    if (!options.headers) {
      options.headers = {}
    }

    options.headers['Authorization'] = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
    options.headers['Content-Type'] = 'application/json'

    return axios.get(url, options)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        console.dir(err)

        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  post ({commit, getters}, {url, data, options = {}, serverName = 'abs'}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    return axios.post(url, data, options)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        console.log(err)
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  put ({commit, getters}, {url, data, options = {}}, serverName = 'abs') {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    return axios.put(url, data, options)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        console.log(err)
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  },
  delete ({commit, getters}, {url, options = {}}, serverName = 'abs') {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    return axios.delete(url, options)
      .then(res => {
        commit('isAjax')
        return res
      })
      .catch(err => {
        console.log(err)
        commit('isAjax')
        commit('error', err)
        commit('hasError', true)
        return Promise.reject(err)
      })
  }
}
