<template>
    <component :is="currentComponent" :item="item" :index="index"/>
</template>
<script>
  import CartItem from './CartItem'
  import SpecialServiceCartItem from './SpecialServiceCartItem'
  import VariantCartItem from './VariantCartItem'
  import {mapGetters} from 'vuex'

  export default {
    name: 'CartItemFactory',
    components: {CartItem, SpecialServiceCartItem, VariantCartItem},
    props: {
      'item': {default: () => {}},
      'index': {default: 0}
    },
    computed: {
      ...mapGetters('products', ['hasVariants']),
      currentComponent () {
        // const hasVariants = this.hasVariants(item)

        // if(hasVariants) {
          // return 'variant-cart-item'
        // }
        if (this.item.type === 'simple') {
          return 'cart-item'
        } else if (this.item.type === 'specialservice') {
          if (this.item.topayapart * 1 === 1) {
            return 'cart-item'
          } else {
            return 'special-service-cart-item'
          }
        } else {
          return 'cart-item'
        }
      }
    }
  }
</script>