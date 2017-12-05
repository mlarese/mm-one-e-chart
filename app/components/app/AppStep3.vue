<template>
    <aside class="col-xs-12 col-sm-4 no-p-r STSS__roomsNew">
        <cart />
    </aside>
</template>

<script>
  import Cart from '../cart/Cart'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'AppStep3',
    components: {Cart},
    computed: {
      ...mapGetters('cart', ['cartChanges', 'cart', 'hasInsurance'])
    },
    watch: {
      cartChanges () {
        if (window.onStep3CartChange) {
          window.onStep3CartChange(this.cart, this.hasInsurance)
        }
      }
    },
    methods: {
      ...mapActions('cart', ['addCoupon', 'removeCoupon'])
    }
  }
</script>
