<template>
    <div class="container no-pd-xs">
        <div class="bound_box ST2-book STSS__accList">
            <component :is="step" />
        </div>
    </div>
</template>

<script>
  import Ecommerce from '../ecommerce/Ecommerce'
  import Insurance from '../insurance/Insurance'
  import {mapGetters} from 'vuex'

  export default {
    name:'App',
    components: {Ecommerce, Insurance},
    computed: {
      ...mapGetters('app', ['step'])
    },
  }
</script>
