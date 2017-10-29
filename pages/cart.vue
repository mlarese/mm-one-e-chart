<template>
    <div class="container no-pd-xs">
        <div class="bound_box ST2-book STSS__accList">
            <ecommerce />
        </div>
    </div>
</template>
<script>
  import Ecommerce from '../components/ecommerce/Ecommerce'

  export default {
    components: {Ecommerce},
    head: {
      link: [
        { rel: 'stylesheet', href: 'css/main.css' },
        { rel: 'stylesheet', href: 'css/extend.css' }
      ]
    }
  }
</script>