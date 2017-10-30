<template>
    <div class="STSS__roomsNew__acc col-xs-12" v-if="hasInsurance">
        <div>
            <a href="#" class="STSS__roomsNew__item__ssr__remove" @click="onRemove">
                 <icon-remove />
            </a>
            <div class="STSS__roomsNew__acc__price text-right">
                <b class="STSS__roomsNew__total__label">Totale assicurazione</b>
                <sup-decimals class="STSS__roomsNew__total__price" :number="insuranceTotal" />
            </div>
            <i class="STSS__roomsNew__acc__msg">Il pagamento della polizza assicurativa avviene in modalità separata</i>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import IconRemove from '../../../components/icons/IconRemove'
  import SupDecimals from '../display/SupDecimalsVx'

  export default {
    methods: {
      ...mapActions('cart', ['removeInsurance']),
      onRemove () {
        this.removeInsurance()
      }
    },
    computed: {
      ...mapGetters('cart', ['hasInsurance', 'insuranceTotal'])
    },
    components: {
      IconRemove, SupDecimals
    }
  }
</script>