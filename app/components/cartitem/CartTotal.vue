<template>
    <div class="STSS__roomsNew__total text-right">
        <a class="STSS__roomsNew__total__link" href="#">Condizioni di prenotazione</a>
        <strong class="STSS__roomsNew__total__label">Totale soggiorno</strong>

        <sup-decimals class="STSS__roomsNew__total__price" :number="cartTotal" />

        <span v-if="cartTotalDiscount>0" class="STSS__roomsNew__total__highlight">Stai risparmiando € {{cartTotalDiscountFormatted}}</span>
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
      cartTotalDiscountFormatted () {
        let number = this.cartTotalDiscount * 1 || 0
        return numeral(number).format('0,0.00')
      }
    }
  }
</script>