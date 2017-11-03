<template>
    <component :is="currentComponent" :item="item" :index="index"/>
</template>
<script>
  import CartItem from './CartItem'
  import SpecialServiceCartItem from './SpecialServiceCartItem'
  export default {
    components: {CartItem, SpecialServiceCartItem},
    props: ['item', 'index'],
    computed: {
      currentComponent () {
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