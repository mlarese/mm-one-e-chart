import {instance} from './axios'
import './mocks'

export const actions = {
  get ({commit}, {url, options = {}}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
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
  post ({commit}, {url, data}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.post(url, data)
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
  put ({commit}, {url, data}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.put(url, data)
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
  delete ({commit}, {url}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    return instance.delete(url)
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
