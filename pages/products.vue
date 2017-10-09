<template>
  <div>
    <h4>Prodotti</h4>
    <template v-for="{product_id} in products">
      <product-item :product="productAndCart(product_id)" />
    </template>

    <cart></cart>


    <nuxt-link to="/cart">Real Cart</nuxt-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ProductItem from './ProductItem'
  import cart from './cart'
  export default {
    components: {
      ProductItem, cart
    },
    computed: {
      ...mapGetters('shop', ['products', 'productAndCart'])
    }
  }
</script>