import _keys from 'lodash/keys'
import _delay from 'lodash/delay'
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {competitors, boBestPrice, absServer}) {
    commit('setCompetitors', competitors)
    commit('setBoBestPrice', boBestPrice)

    const numOfCompetitors = _keys(competitors).length
    const singleIncrement = 100 / numOfCompetitors
    commit('setSingleIncrement', singleIncrement)

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        /** versione per produzione
        for(let competitor in competitors){
          dispatch('compare', {competitor})
        }
        **/
        // versione fake
        dispatch('compare', {competitor: 'bookingcom'})
          .then(() => dispatch('compare', {competitor: 'tripadvisor'})
              .then(() => dispatch('compare', {competitor: 'expedia'}))
          )

        return
      })
  },
  compare ({commit, state, dispatch}, {competitor}) {
    const url = `/comparator/compare/${competitor}`
    // fake
    const boPrice = state.boBestPrice
    const pc = randomInt(12, 50)

    let competitorPrice = boPrice*pc/100 + boPrice

    console.log('*******************', competitor)
    return dispatch('api/get', {url}, {root: true})
      .then(res => {
        commit('setCompetitorPrice', {competitor, competitorPrice})
        commit('incrementProgressPercent')

      })

  }
}
