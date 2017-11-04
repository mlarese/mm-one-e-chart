<template>
    <div class="STSS__content__protection__container insurance-protection">
        <h4 class="STSS__content__protection__title text-uppercase">PROTECTION</h4>
        <img width="40" height="44" class="pull-right" src="images/all_plus.jpg">
        <div class="STSS__content__protection__list">
            <ul>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Cancellation of stay')}}</span>

                    <a href="#">
                        <icon-info />
                    </a>
                </li>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('24h support')}}</span></li>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Medical expenses')}}</span></li>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Interruption of stay')}}</span></li>
                <li>
                    <icon-slim-tick />
                    <span>{{$t('Refund of penalties')}}</span></li>
            </ul>
        </div>

        <div class="STSS__content__protection__select" style="margin-bottom:28px">
            <small>{{$t('Insure')}}</small>
        </div>
        <div class="STSS__content__protection__select">
            <vue-select :options="insureOptions" v-model="currentType" />
        </div>


        <div class="STSS__content__protection__price text-center" :class="{'STSS__content__protection__price--add': hasInsuranceProtectionPlus}">
            <span>{{$t('For just')}}</span> <sup-decimals :number="currentPrice" />
        </div>

        <div class="STSS__content__protection__button text-center" :class="{'STSS__content__protection__button--add': hasInsuranceProtectionPlus}">
            <button @click="onAdd" type="submit" class="text-uppercase" v-if="!hasInsuranceProtectionPlus">
                {{$t('Add')}}
            </button>

            <button type="submit" class="button-added text-uppercase" v-if="hasInsuranceProtectionPlus">
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
    name: 'InsuranceProtectionFull',
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
        const type = 'all'
        const premium = this.currentPrice
        const amount = this.amount
        const contract = this.contract

        this.addInsurance({type, premium, amount, contract })
      }
    },
    computed: {
      ...mapGetters('cart', [
        'insurancePriceAllDeposit',
        'insurancePriceAll',
        'insurancePriceAllDepositUrl',
        'insurancePriceAllUrl',
        'insurancePriceAllPid',
        'insurancePriceAllDepositPid'
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
          return this.insurancePriceAllUrl
        } else {
          return this.insurancePriceAllDepositUrl
        }
      },
      contract () {
        if (this.currentType.value * 1 === 0) {
          return this.insurancePriceAllPid
        } else {
          return this.insurancePriceAllDepositPid
        }
      },
      currentPrice () {
        if (this.currentType.value * 1 === 0) {
          return this.insurancePriceAll
        } else {
          return this.insurancePriceAllDeposit
        }
      },
      priceAll () {
        return this.insurancePriceAll
      },
      priceDeposit () {
        return this.insurancePriceAllDeposit
      }
    }
  }
</script>

<style lang="scss">
    @import "insuranceprotection";
</style>