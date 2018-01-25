<template>
    <div class="bound_box ST2-book STSS__accList">
        <notifications position="bottom right" />
        <component :is="currentComponent" />
    </div>
</template>

<script>
  import Special from '../ecommerce/Special'
  import Ecommerce from '../ecommerce/Ecommerce'
  import Insurance from '../insurance/Insurance'
  import {mapGetters, mapState} from 'vuex'

  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        console.log('---- notification')
        this.$notify(this.notification);
      },
    },
    components: {Ecommerce, Insurance, Special},
    computed: {
      ...mapGetters('app', ['step']),
      ...mapState('api', ['notification']),
      currentComponent () {
        if (this.step === 'onlyecommerce') {
          return 'ecommerce'
        } else {
          return this.step
        }
      }
    }
  }
</script>
