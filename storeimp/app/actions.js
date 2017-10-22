import {changeLocale} from '../../assets/localehlp'

const defineWatchers = ({store, getters, dispatch, rootGetters}) => {
  store.watch(state => getters.currentCategory, () => {
    if (getters.currentCategory !== null) {
      const category = rootGetters['categories/category'](getters.currentCategory)
      dispatch('products/loadProductsOrServices', {category}, {root: true})
    }
  })
}

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {locale = 'it', structureConfig: structureOptions, store, absServer}) {
    console.log('-- app.init')
    defineWatchers({store, getters, dispatch, rootGetters})

    const localeData = changeLocale(locale)
    commit('setLocale', {...localeData.delimiters, locale})

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        return dispatch('structure/init', structureOptions, {root: true})
          .then(() => {
            const configActions = [
              dispatch('booking/loadFlowSetup', structureOptions, {root: true}),
              dispatch('booking/loadStructureConfig', structureOptions, {root: true})
            ]
            return Promise.all(configActions)
              .then(() => {
                return dispatch('categories/loadCategories', {partners: rootGetters['booking/partners']}, {root: true})
                  .then(() => commit('setCurrentCategory', rootGetters['booking/structureConfig'].defaultCategory))
              })
          })
      })
  },
  changeCategory ({commit}, categoryId) {
    commit('setCurrentCategory', categoryId)
  }
}
