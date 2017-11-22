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
      ...mapGetters('products', ['hasVariants']),
      currentComponent () {
        // const hasVariants = this.hasVariants(product)
        const hasVariant = false

        if (hasVariant) {
          return 'variant-product-item'
        } else {
          return 'product-item'
        }
      }
    }
  }
</script>