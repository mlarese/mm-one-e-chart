<template>
  <div>
    <div> <group-bar /> </div>
    <div style="background: black; color: white;padding:10px;">
       <h4>Carrello</h4>
       <cart />
    </div>

    <div  style="background: black; color: white;padding:10px;margin-bottom:10px" >
        <div v-if="products.length>0" infinite-wrapper style="overflow-y: auto; height:200px" ref="wrap">
            <h4>Prodotti</h4>
            <template v-for="{product_id} in products">
              <product-item :product="productAndCart(product_id)" />
            </template>
            
            <mugen-scroll :handler="fetchData" scroll-container="wrap" :handleOnMount="true">
                loading...
            </mugen-scroll>
        </div>

    </div>


  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ProductItem from './ProductItem'
  import cart from './cart'
  import Bar from '../components/groups/GroupBar'
  import {connect} from '../assets/hoc'
  import MugenScroll from 'vue-mugen-scroll'

  const GroupBar = connect('shop/products', Bar)
  export default {
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData ($state) {
        console.log('----- fetch')
        this.$store.dispatch('shop/products/loadProducts', null, {root: true})
      }
    },
    components: {ProductItem, cart, GroupBar, MugenScroll},
    computed: {
      ...mapGetters('api', ['isAjax']),
      ...mapGetters('shop', ['products', 'productAndCart'])
    }
  }
</script>