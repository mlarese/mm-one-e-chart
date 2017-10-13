<template>
    <div class="wrap" ref="scrollContainer">
        <div v-if="products.length > 0">
            <template v-for="{productId} in products">
                <product-item :product="productAndCart(productId)" />
            </template>
        </div>

        <mugen-scroll
                class="you-can-add-custom-class-name"
                :handler="fetch"
                :should-handle="!loading"
                :handleOnMount="false"
                scroll-container="scrollContainer">
                ...
        </mugen-scroll>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import ProductItem from '../productitem/ProductItem'
  import MugenScroll from 'vue-mugen-scroll'

  export default {
    data () {
      return {
        users: [],
        loading: false
      }
    },
    methods: {
      ...mapActions('shop/products', ['loadProducts']),
      fetch () {
        this.loading = true
        this.loadProducts()
          .then(res => {
            this.loading = false
            return res
          })
      }
    },
    components: {ProductItem, MugenScroll},
    computed: {
      ...mapGetters('api', ['isAjax']),
      ...mapGetters('shop', ['products', 'productAndCart'])
    }
  }
</script>

<style lang="scss">
    .wrap {
        background: chocolate;
        position: fixed;
        width:98vw;
        bottom: 10px;
        height: 40vh;
        margin: 0 auto;
        overflow-y: auto;
    }
</style>