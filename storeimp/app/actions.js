import {changeLocale} from '../../assets/localehlp'

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {locale = 'it', structureConfig, store}) {
    console.log('-- app.init')
    const localeData = changeLocale(locale)
    commit('setLocale', {...localeData.delimiters, locale})

    const configActions = [
      dispatch('booking/loadFlowSetup', null, {root: true}),
      dispatch('booking/loadStructureConfig', null, {root: true})
    ]

    console.dir(store.getters)

    store.watch(getters.get(), () => {
      console.dir(arguments)
    })
    return dispatch('structure/init', structureConfig, {root: true})
      .then(() => {
        return Promise.all(configActions)
          .then(() => dispatch('categories/loadCategories', {partners: rootGetters['app/partners']}, {root: true}))
      })
  }
}
