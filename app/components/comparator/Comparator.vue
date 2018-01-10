<template>
    <div class="widget-comparator" v-if="visible">
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
      ...mapGetters('comparator', ['comparationDone', 'channelsCount']),
      visible () {
        return this.channelsCount > 0
      },
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
    @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins";
    @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";
    @import '../../assets/scss/vars';
    @import '_vars.scss';
    @import '_betterPriceBar.scss';
</style>