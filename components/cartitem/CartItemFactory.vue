<template>
    <component :is="currentComponent" :item="item" :index="index"/>
</template>
<script>
  import CartItem from './CartItem'
  export default {
    components: {CartItem},
    props: ['item', 'index'],
    computed: {
      currentComponent () {
        if (this.item.type === 'test') {
          return 'cart-item'
        } else {
          return 'cart-item'
        }
      }
    }
  }
</script>