<template>
    <em>
        <span v-html="prefix"></span>
        <span v-text="intPart"></span>
        <sup>
            <span v-text="decimal"></span><span v-text="decPart"></span>
        </sup>
    </em>
</template>

<script>
  import numeral from 'numeral'

  export default {
    name: 'SupDecimals',
    props: {
      number: {default: 2345.897},
      prefix: {default: '&euro;'},
      suffix: {default: ''},
      locale: {default: 'it'},
      decimal: {default: ','},
      thousands: {default: '.'}
    },
    computed: {
      numberPart () {
        return numeral(this.number).format('0,0.00').split(this.decimal)
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