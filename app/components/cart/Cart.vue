<template>
    <div class="widget-cart">
        <h3 class="STSS__roomsNew__title">Il tuo soggiorno</h3>

        <span class="cart-items">
            <cart-rooms />
            <template v-for="(item, index) in ecommerceItems">
                <cart-item-factory :item="item" :index="index" />
            </template>
            <insurance-cart-item />
        </span>
    </div>
</template>
<script>
  import InsuranceCartItem from '../cartitem/InsuranceCartItem'
  import CartRooms from './CartRooms'
  import CartItemFactory from '../cartitem/CartItemFactory'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {CartItemFactory, CartRooms, InsuranceCartItem},
    computed: {
      ...mapGetters('cart', ['ecommerceItems'])
    }
  }
</script>