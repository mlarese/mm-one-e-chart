<template>
    <div class="STSS__roomsNew__total text-right">
        <a class="STSS__roomsNew__total__link" href="https://reservation.cmsone.it/metis/show_terms.php" target="_blank">{{$t('Reservation conditions')}}</a>
        <strong class="STSS__roomsNew__total__label">{{$t('Total Price')}}</strong>

        <sup-decimals class="STSS__roomsNew__total__price" :number="cartTotal" />
        <span v-if="cartTotalDiscount>0" class="STSS__roomsNew__total__highlight">{{$t('You are saving')}} {{currency}} {{cartTotalDiscountFormatted}}</span>
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
      ...mapGetters('cart', ['cartTotal', 'cartTotalDiscount']),
      ...mapGetters('app', ['currency']),
      cartTotalDiscountFormatted () {
        let number = this.cartTotalDiscount * 1 || 0
        return numeral(number).format('0,0.00')
      }
    }
  }
</script>