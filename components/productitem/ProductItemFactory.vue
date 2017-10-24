<template>
    <component :is="currentComponent" :product="product" />
</template>
<script>
  import ProductItem from './ProductItem'
  export default {
    components: {ProductItem},
    props: ['product'],
    computed: {
      currentComponent () {
        if (product.type === 'test'){
          return 'product-item'
        } else {
          return 'product-item'
        }
      }
    },
  }
</script>