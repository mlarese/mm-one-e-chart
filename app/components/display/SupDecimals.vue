<template>

    <span class="sub-decimals">
        <del v-if="hasDiscount">
            <span v-html="prefix"></span>
            {{numberFromFormatted}}
        </del>
        <span v-if="hasDiscount" class="sub-decimals-discount">&nbsp; -{{discount}}% </span>
        <em class="sub-decimals-em">
            {{prefix}}
            {{intPart}}
            <sup>{{decimal}}{{decPart}}</sup>
        </em>
    </span>

</template>

<script>
  import numeral from 'numeral'

  export default {
    name: 'SupDecimals',
    props: {
      numberFrom: {default: 0},
      discount: {default: ''},
      number: {default: 2345.897},
      prefix: {default: '€'},
      suffix: {default: ''},
      locale: {default: 'it'},
      decimal: {default: ','},
      thousands: {default: '.'}
    },
    computed: {
      numberFromFormatted () {
        let number = this.numberFrom * 1 || 0
        return numeral(number).format('0,0.00')
      },
      hasDiscount () {
        return (this.discount && this.discount !== '' && this.discount > 0)
      },
      numberPart () {
        let number = this.number * 1 || 0
        const decimal = this.decimal
        return numeral(number).format('0,0.00').split(decimal)
      },
      intPart () {
        return this.numberPart[0]
      },
      decPart () {
        return this.numberPart[1]
      }
    }
  }
</script>
<style lang="scss">
    .sub-decimals {
        .sub-decimals-em {
            white-space: nowrap;
        }
    }
</style>