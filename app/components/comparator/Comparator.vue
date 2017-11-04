<template>
    <div class="widget-comparator">
        <component :is="currentView" />
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import ComparatorBar from './ComparatorBar'
  import ComparatorResult from './ComparatorResult'

  export default {
    components: {
      ComparatorBar, ComparatorResult
    },
    computed: {
      ...mapGetters('comparator', ['comparationDone']),
      currentView () {
        if (this.comparationDone){
          return 'comparator-result'
        } else {
          return 'comparator-bar'
        }
      }
    }
  }
</script>

<style lang="scss">
    // @import '../../assets/scss/vars';
    // @import '_vars.scss';
    // @import '_betterPriceBar.scss';
</style>