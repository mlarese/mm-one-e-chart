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

        <div class="STSS__content__protection__select">
            <small v-if="false">{{$t('Insure')}}</small>
            {{cart.insurance.insure}}
            <vue-select :options="insureOptions" v-model="cart.insurance.insure">

            </vue-select>
        </div>

        <div class="STSS__content__protection__price text-center" :class="{'STSS__content__protection__price--add': hasInsuranceProtection}">
            <span>A soli</span> <sup-decimals :number="protectionTotal" />
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
            <em>(prima dell’acquisto, <a href="#">legga il fascicolo informativo Protection</a>)</em>
        </div>
    </div>
</template>
<script>
  import BaseInsuranceProtection from './BaseInsuranceProtection'
  export default {
    name: 'InsuranceProtection',
    extends: BaseInsuranceProtection,
    methods: {
      onAdd () {
        this.addInsurance('protection')
      }
    }
  }
</script>

<style lang="scss">
    .insurance-protection{
       .dropdown-toggle{
           padding-left: 35px;
           input{width:0 !important}
           background-image: url(../../static/images/family26.png);
           background-repeat: no-repeat;
           background-size: 33px 30px;;
           background-position-y: 2px;
           background-position-x: 4px;
       }

       .dropdown-menu {
           overflow: hidden;
       }
    }
    .button-added {
        cursor: default;
    }
</style>