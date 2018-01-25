<template>
    <div class="STSS__roomsNew__acc col-xs-12" v-if="hasInsurance">
        <div>
            <a href="#" class="STSS__roomsNew__item__ssr__remove" @click="onRemove" v-if="!insuranceLocked">
                 <icon-remove />
            </a>
            <div class="STSS__roomsNew__acc__price text-right">
                <b class="STSS__roomsNew__total__label">{{$t('Total Insurance price')}}</b>
                <sup-decimals v-if="inited" class="STSS__roomsNew__total__price" :number="insuranceTotal" />
                <sup-decimals v-if="!inited" class="STSS__roomsNew__total__price" :number="0" />
            </div>
            <i class="STSS__roomsNew__acc__msg">{{$t('The insurance policy payment is separate from the reservation process')}}</i>
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
      ...mapGetters('cart', ['hasInsurance', 'insuranceTotal', 'inited']),
      ...mapGetters('app', ['cartLocked', 'insuranceLocked'])
    },
    components: {
      IconRemove, SupDecimals
    }
  }
</script>