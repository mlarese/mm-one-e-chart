import {mapGetters, mapActions} from 'vuex'
import _keys from 'lodash/keys'

let counter = 1

export const connect = (ns, {name, props, computed, methods, render, data, created, watch}) => ({
  name: name || 'Component' + counter++,
  computed: {
    ...mapGetters(ns, _keys(props)),
    ...computed
  },
  watch,
  created,
  data,
  methods: mapActions(ns, _keys(methods)),
  render
})
