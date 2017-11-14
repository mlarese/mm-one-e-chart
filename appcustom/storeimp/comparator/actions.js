import _keys from 'lodash/keys'
import _delay from 'lodash/delay'
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const actions = {
  init ({commit, dispatch, getters, rootGetters}, {competitors, boBestPrice, absServer, currency = '€'}) {
    boBestPrice = Math.floor(boBestPrice)

    commit('setCompetitors', competitors)
    commit('setBoBestPrice', boBestPrice)
    commit('setCurrency', currency)

    const numOfCompetitors = _keys(competitors).length
    const singleIncrement = Math.floor(100 / numOfCompetitors)
    commit('setSingleIncrement', singleIncrement)

    return dispatch('api/init', {absServer}, {root: true})
      .then(() => {
        /** versione per produzione
        for(let competitor in competitors){
          dispatch('compare', {competitor})
        }
        **/
        // versione fake
        dispatch('compare', {competitor: 'bookingcom', index: 0})
          .then(() => dispatch('compare', {competitor: 'tripadvisor', index: 1})
              .then(() => dispatch('compare', {competitor: 'expedia', index: 2}))
          )

        return
      })
  },
  compare ({commit, state, dispatch}, {competitor, index}) {
    const url = '/comparator/compare/' + competitor
    // fake
    const boPrice = state.boBestPrice * 1
    const pc = boPrice * boPrice * boPrice
    const letSpc = pc + '#'

    let increment = letSpc[index]+letSpc[index+1]
    increment = increment * 1
    if ( increment * 1 < 10){
      increment = 12
    }
    let competitorPrice = Math.floor( increment + boPrice )

    console.log('*******************', competitor)
    return dispatch('api/get', {url}, {root: true})
      .then(res => {
        commit('setCompetitorPrice', {competitor, competitorPrice})
        commit('incrementProgressPercent')

      })

  }
}
