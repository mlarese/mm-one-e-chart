<template>
    <component :is="currentComponent" :product="product" />
</template>
<script>
  import ProductItem from './ProductItem'
  import VariantProductItem from './VariantProductItem'
  import {mapGetters} from 'vuex'

  export default {
    components: {ProductItem, VariantProductItem},
    props: ['product'],
    computed: {
      ...mapGetters('products'. ['hasVariants']),
      currentComponent () {
        const hasVariants = this.hasVariants(product)

        if (hasVariants) {
          return 'variant-product-item'
        } else {
          return 'product-item'
        }
      }
    }
  }
</script>