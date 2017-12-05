<template>
    <div class="STSS__roomsNew__total text-right">
        <a class="STSS__roomsNew__total__link" :href="bookingConditionsLink" target="_blank">{{$t('Reservation conditions')}}</a>

        <div v-if="hasCoupon">
            <span class="STSS__roomsNew__total__highlight">
                {{$t('Coupon')}} <span v-if="isPercentCoupon"> - {{coupon}}% </span>
                <sup-decimals class="STSS__roomsNew__total__price" :number="couponValue" /></span>
        </div>
        <div>
            <strong class="STSS__roomsNew__total__label">{{$t('Total Price')}}</strong>
            <sup-decimals class="STSS__roomsNew__total__price" :number="cartTotal" />
            <span v-if="cartTotalDiscount>0" class="STSS__roomsNew__total__highlight">{{$t('You are saving')}} {{currency}} {{cartTotalDiscountFormatted}}</span>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SupDecimals from '../display/SupDecimalsVx'
  import numeral from 'numeral'

  export default {
    name: 'CartTotal',
    components: {
      SupDecimals
    },
    computed: {
      ...mapGetters('cart', ['cartTotal', 'cartTotalDiscount', 'bookingConditionsLink', 'hasCoupon', 'coupon', 'couponValue', 'isPercentCoupon']),
      ...mapGetters('app', ['currency']),
      cartTotalDiscountFormatted () {
        let number = this.cartTotalDiscount * 1 || 0
        return numeral(number).format('0,0.00')
      }
    }
  }
</script>