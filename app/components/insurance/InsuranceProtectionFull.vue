<template>
    <div class="STSS__content__protection__container">
        <h4 class="STSS__content__protection__title text-uppercase">PROTECTION PLUS</h4>
        <img src="images/all_plus.jpg" width="40" height="44" class="pull-right">
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

        <div class="STSS__content__protection__select">
            <small>{{$t('Insure')}}</small>
            <select id="price_cancel" name="insuranceBooking" class="insurance hund select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="0" selected="selected">{{$t('Account/Deposit')}}</option>
                <option value="1">Tutto il soggiorno</option>
            </select>
        </div>
        <div class="STSS__content__protection__price text-center" :class="{'STSS__content__protection__price--add': hasInsuranceProtectionPlus}">
            <span>A soli</span>

            <sup-decimals :number="protectionPlusTotal" />

        </div>

        <div class="STSS__content__protection__button text-center" :class="{'STSS__content__protection__button--add': hasInsuranceProtectionPlus}">

            <button @click="onAdd" type="submit" class="text-uppercase" v-if="!hasInsuranceProtectionPlus">
                {{$t('Add')}}
            </button>

            <button type="submit" class="text-uppercase button-added" v-if="hasInsuranceProtectionPlus">
                {{$t('Added')}} <icon-tick />
            </button>

        </div>
        <div class="STSS__content__protection__info text-center">
            <em>(prima dell’acquisto, <a href="#">legga il fascicolo informativo Protection Plus</a>)</em>
        </div>
    </div>
</template>

<script>
  import BaseInsuranceProtection from './BaseInsuranceProtection'
  export default {
    name: 'InsuranceProtectionFull',
    extends: BaseInsuranceProtection,
    methods: {
      onAdd () {
        this.addInsurance('protectionPlus')
      }
    }
  }
</script>

<style lang="scss">
    .button-added {
        cursor: default;
    }
</style>