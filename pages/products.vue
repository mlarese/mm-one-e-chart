<template>
  <div>
    <div style="background: black; color: white;padding:10px;margin-bottom:10px">
        <h4>Prodotti</h4>
        <template v-for="{product_id} in products">
          <product-item :product="productAndCart(product_id)" />
        </template>
    </div>

    <div style="background: black; color: white;padding:10px;">
      <h4>Carrello</h4>
      <cart />
    </div>
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