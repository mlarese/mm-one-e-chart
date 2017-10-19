import {changeLocale} from '../../assets/localehlp'

const defineWatchers = ({store, getters, dispatch}) => {
  store.watch(state => getters.currentCategory, () => {
    if (getters.currentCategory !== null) {
      dispatch('products/loadProducts', {getters}, {root: true})
    }
  })
}

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {locale = 'it', structureConfig, store, absServer}) {
    console.log('-- app.init')
    defineWatchers({store, getters, dispatch})

    const localeData = changeLocale(locale)
    commit('setLocale', {...localeData.delimiters, locale})

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        return dispatch('structure/init', structureConfig, {root: true})
          .then(() => {
            const configActions = [
              dispatch('booking/loadFlowSetup', null, {root: true}),
              dispatch('booking/loadStructureConfig', null, {root: true})
            ]
            return Promise.all(configActions)
              .then(() => dispatch('categories/loadCategories', {partners: rootGetters['app/partners']}, {root: true}))
          })
      })
  }
}
