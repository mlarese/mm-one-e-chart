<template>
    <div class="bound_box ST2-book STSS__accList">
        <notifications position="bottom right" />
        <component :is="step" />
    </div>
</template>

<script>
  import Special from '../ecommerce/Special'
  import Onlyecommerce from '../ecommerce/Onlyecommerce'
  import Ecommerce from '../ecommerce/Ecommerce'
  import Insurance from '../insurance/Insurance'
  import {mapGetters, mapState} from 'vuex'

  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        this.$notify(this.notification);
      },
    },
    components: {Ecommerce, Insurance, Onlyecommerce, Special},
    computed: {
      ...mapGetters('app', ['step']),
      ...mapState('api', ['notification'])
    }
  }
</script>
