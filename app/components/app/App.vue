<template>

        <div class="bound_box ST2-book STSS__accList">
            <component :is="step" />
        </div>

</template>

<script>
  import Special from '../ecommerce/Special'
  import Onlyecommerce from '../ecommerce/Onlyecommerce'
  import Ecommerce from '../ecommerce/Ecommerce'
  import Insurance from '../insurance/Insurance'
  import {mapGetters} from 'vuex'

  export default {
    name:'App',
    components: {Ecommerce, Insurance, Onlyecommerce, Special},
    computed: {
      ...mapGetters('app', ['step'])
    }
  }
</script>
