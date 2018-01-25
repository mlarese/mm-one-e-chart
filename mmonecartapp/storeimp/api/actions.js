import axios from 'axios'

const notifyError = err => {
  let text = err.response.statusText
  if (err.response.data && err.response.data.error_message) {
    text = err.response.data.error_message
  }
  return {title:'Error ' + err.response.status  ,text, type:'error'}
}

const notifySuccess = ({title,text}) => ({title , text ,type:'success'})

export const actions = {
  init ({commit, dispatch}, {absServer}) {
    console.log('--- api.init')
    dispatch('addServer', {key: 'abs', url: absServer})
  },
  addServer ({commit}, {key, url}) {
    const urlLastChar = url.slice(-1);
    if (urlLastChar !== '/') {
      url = url + '/'
    }
    const baseURL = url + 'RESTfulAPI'

    const instance = axios.create({
      timeout: 90000,
      withCredentials: false,
      baseURL
    })
    commit('addServer', {key, instance, baseURL})
  },
  get ({commit, getters}, {url, options = {}, serverName = 'abs'}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')

    const instance = getters.server(serverName)
    console.log('******* api.get', url, 'on', serverName)
    if (!options.headers) {
      options.headers = {}
    }

    // options.headers['Authorization'] = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
    options.headers['Content-Type'] = 'application/json'

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
        commit('notification',notifyError(err))

        return Promise.reject(err)
      })
  },
  post ({commit, getters}, {url, data, options = {}, serverName = 'abs'}) {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    const instance = getters.server(serverName)
    console.log('******* api.post', url, 'on', serverName)
    // options.headers['Content-Type'] = 'application/json'

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
        commit('notification',notifyError(err))
        return Promise.reject(err)
      })
  },

  put ({commit, getters}, {url, data, options = {}}, serverName = 'abs') {
    commit('isAjax', true)
    commit('error')
    commit('hasError')
    const instance = getters.server(serverName)
    // options.headers['Content-Type'] = 'application/json'
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
        commit('notification',notifyError(err))
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
        commit('notification',notifyError(err))
        return Promise.reject(err)
      })
  }
}
