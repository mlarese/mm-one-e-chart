<template>
    <div class="container no-pd-xs">
        <ecommerce />
    </div>
</template>
<script>
  import Ecommerce from '../components/ecommerce/Ecommerce'

  export default {
    components: {Ecommerce},
    head: {
      link: [
        { rel: 'stylesheet', href: 'css/main.css' }
      ]
    }
  }
</script>