<template>
    <div class="STSS__roomsNew__total text-right">
        <a class="STSS__roomsNew__total__link" href="#">Condizioni di prenotazione</a>
        <strong class="STSS__roomsNew__total__label">Totale soggiorno</strong>

        <sup-decimals class="STSS__roomsNew__total__price" :number="cartTotal" />

        <span class="STSS__roomsNew__total__highlight">Stai risparmiando € 240,00</span>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SupDecimals from '../display/SupDecimalsVx'

  export default {
    name: 'CartTotal',
    components: {
      SupDecimals
    },
    computed: {
      ...mapGetters('cart', ['cartTotal'])
    },
  }
</script>