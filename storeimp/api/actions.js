import axios from 'axios'
import './mocks'

export const actions = {
  init ({commit, dispatch}, {absServerUrl}) {
    console.log('--- api.init')
    dispatch('addServer', {key: 'abs', url: absServerUrl})
  },
  addServer ({commit}, {key, url}) {
    const instance = axios.create({baseURL: url, timeout: 1000})
    commit('addServer', {key, instance})
  },
  get ({commit, getters}, {url, options = {}, serverName = 'abs'}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    const instance = getters.server(serverName)
    console.log('******* api.get', url, 'on', serverName)
    return instance.get(url, options)
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
    const instance = getters.server(serverName)
    return instance.post(url, data, options)
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
    const instance = getters.server(serverName)
    return instance.put(url, data, options)
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
    const instance = getters.server(serverName)
    return instance.delete(url, options)
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
