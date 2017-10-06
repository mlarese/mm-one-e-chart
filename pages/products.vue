<template>
  <div>
    <h4>Prodotti</h4>
    <template v-for="product in list">
      <div>- ({{product.product_id}}) {{product.product_name}} q.ty={{product.inventory}}  available = {{productStatus(product).availableQuantity}}   </div>
    </template>

    <nuxt-link to="/cart">Real Cart</nuxt-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    methods: {
      productStatus ({product_id, inventory}) {
        let cartQuantity = this.totalQuantityByProduct[product_id] || 0
        const availableQuantity = inventory - cartQuantity
        return {
          product_id,
          inventory,
          cartQuantity,
          availableQuantity
        }
      }
    },
    computed: {
      ...mapGetters('shop/products', ['list']),
      ...mapGetters('shop/linearcart', ['totalQuantityByProduct'])
    }
  }
</script>