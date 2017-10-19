import axios from 'axios'
import './mocks'

export const actions = {
  init ({commit}, {absServer}) {
    console.log('--- api.init')

    commit('setAbsServer', absServer)
  },
  get ({commit, getters}, {url, options = {}}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

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
  post ({commit}, {url, data, options = {}}) {
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
  put ({commit}, {url, data, options = {}}) {
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
  delete ({commit}, {url, options = {}}) {
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
