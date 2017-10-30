<template>
    <div class="container no-pd-xs">
        <div class="bound_box ST2-book STSS__accList">
            <!-- ecommerce / -->
            <insurance />
        </div>
    </div>
</template>

<script>
  import Ecommerce from '../ecommerce/Ecommerce'
  import Insurance from '../insurance/Insurance'

  export default {
    name:'App',
    components: {Ecommerce, Insurance}
  }
</script>
