<template>
    <div class="STSS__content__protection__container insurance-protection">
        <h4 class="STSS__content__protection__title text-uppercase">PROTECTION</h4>
        <img width="40" height="44" class="pull-right" src="images/all_base.jpg">
        <div class="STSS__content__protection__list">
            <ul>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Cancellation of stay')}}</span>
                    <a href="#">
                        <icon-info style="max-width: 26px" />
                    </a>
                </li>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Refund of penalties')}}</span></li>
            </ul>
        </div>

        <div class="STSS__content__protection__select" style="margin-bottom:28px">
            <small>{{$t('Insure')}}</small>
        </div>
        <div class="STSS__content__protection__select">
            <vue-select :options="insureOptions" v-model="currentType"  :disabled="hasInsuranceProtection"/>
        </div>


        <div class="STSS__content__protection__price text-center" :class="{'STSS__content__protection__price--add': hasInsuranceProtection}">
            <span>{{$t('For just')}}</span> <sup-decimals :number="currentPrice" />
        </div>

        <div class="STSS__content__protection__button text-center" :class="{'STSS__content__protection__button--add': hasInsuranceProtection}">
            <button @click="onAdd" type="submit" class="text-uppercase" v-if="!hasInsuranceProtection">
                {{$t('Add')}}
            </button>

            <button type="submit" class="button-added text-uppercase" v-if="hasInsuranceProtection">
                {{$t('Added')}} <icon-tick />
            </button>
        </div>
        <div class="STSS__content__protection__info text-center">
            <em>({{$t('before you buy')}}, <a :href="contractUrl" target="_blank">{{$t('read the information leaflet')}} Protection</a>)</em>
        </div>
    </div>
</template>
<script>
  import BaseInsuranceProtection from './BaseInsuranceProtection'
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: 'InsuranceProtection',
    extends: BaseInsuranceProtection,
    data () {
      return {
        currentType: {}
      }
    },
    created () {
      this.currentType = this.insureOptions[0]
    },
    methods: {
      onAdd () {
        const type = 'cancel'
        const premium = this.currentPrice
        const amount = this.amount
        const contract = this.contract

        this.addInsurance({type, premium, amount, contract })
      }
    },
    computed: {
      ...mapGetters('cart', [
        'insurancePriceCancelDeposit',
        'insurancePriceCancel',
        'insurancePriceCancelDepositUrl',
        'insurancePriceCancelUrl',
        'insurancePriceCancelPid',
        'insurancePriceCancelDepositPid'
      ]),
      amount () {
        if (this.currentType.value * 1 === 0) {
          return 'deposit'
        } else {
          return 'total'
        }
      },
      contractUrl () {
        if (this.currentType.value * 1 === 0) {
          return this.insurancePriceCancelUrl
        } else {
          return this.insurancePriceCancelDepositUrl
        }
      },
      contract () {
        if (this.currentType.value * 1 === 0) {
          return this.insurancePriceCancelPid
        } else {
          return this.insurancePriceCancelDepositPid
        }
      },
      currentPrice () {
        if (this.currentType.value * 1 === 0) {
          return this.insurancePriceCancel
        } else {
          return this.insurancePriceCancelDeposit
        }
      },
      priceAll () {
        return this.insurancePriceCancel
      },
      priceDeposit () {
        return this.insurancePriceCancelDeposit
      }
    }
  }
</script>

<style lang="scss">
    @import "insuranceprotection";
</style>