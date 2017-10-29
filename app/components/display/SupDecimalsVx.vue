<template>
    <sup-decimals
      :locale="locale"
      :decimal="decimal"
      :thousands="thousands"
      v-bind="$attrs"
    />
</template>

<script>
  import SupDecimals from './SupDecimals'
  import {mapGetters} from 'vuex'

  export default {
    name: 'SupDecimalsVx',
    components: {
      SupDecimals
    },
    computed: {
      ...mapGetters('app', ['locale', 'decimal', 'thousands'])
    }
  }
</script>