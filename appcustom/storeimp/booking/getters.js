import {absServer} from '../api/getters'
import _forEach from 'lodash/forEach'
export const getters = {
  absServer,
  structureConfig: state => state.structureConfig,
  partners: (state) => {
    const {ecommerceHosts, partners} = state.structureConfig
    let retpartners = []
    _forEach(ecommerceHosts, (url, shopId) => {
      let partnerId = 0
      if (partners[shopId]) {
        partnerId = partners[shopId]
      }

      retpartners.push({shopId, partnerId})
    })
    return retpartners
  }
}
