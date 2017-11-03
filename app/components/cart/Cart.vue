<template>
    <div class="widget-cart">
        <h3 class="STSS__roomsNew__title">{{$t('Your stay')}}</h3>

        <span class="cart-items">
            <cart-rooms />
            <template v-for="(item, index) in ecommerceItems">
                <cart-item-factory :item="item" :index="index" />
            </template>
            <cart-total />
            <template v-for="(item, index) in payLaterItems">
                <cart-item-factory :item="item" :index="index" />
            </template>

            <insurance-cart-item />
            <cart-next-button />

        </span>
        <div class="widget-cart-resizer"></div>
    </div>
</template>
<script>
  import InsuranceCartItem from '../cartitem/InsuranceCartItem'
  import CartNextButton from '../cartitem/CartNextButton'
  import CartTotal from '../cartitem/CartTotal'
  import CartRooms from './CartRooms'
  import CartItemFactory from '../cartitem/CartItemFactory'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {CartItemFactory, CartRooms, InsuranceCartItem, CartTotal, CartNextButton},
    computed: {
      ...mapGetters('cart', ['ecommerceItems', 'payLaterItems'])
    }
  }
</script>

<style lang="scss">
    .widget-cart{
        .widget-cart-resizer{
            clear:both;
            margin-bottom: 60px;
        }
    }
</style>