import SupDecimals from './SupDecimals'
import {mapGetters} from 'vuex'
const {computed, render, name} = SupDecimals
const {number, prefix, sufix} = SupDecimals.props

export const SupDecimalsVxConnect = (ns) => ({
  name,
  props: {number, prefix, sufix},
  computed: {
    ...computed,
    ...mapGetters(ns, ['locale', 'decimal', 'thousands'])
  },
  render
})
