import {absServer} from '../api/getters'
import _forEach from 'lodash/forEach'
export const getters = {
  absServer,
  structureConfig: state => state.structureConfig,
  partners: (state) => {
    const {ecommerceHosts, partnerIds} = state.structureConfig
    let partners = []
    _forEach(ecommerceHosts, (url, shopId) => {
      let partnerId = 0
      if (partnerIds[shopId]) {
        partnerId = partnerIds[shopId]
      }

      partners.push({shopId, partnerId})
    })
    return partners
  }
}
