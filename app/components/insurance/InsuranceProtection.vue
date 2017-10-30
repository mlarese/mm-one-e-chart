<template>
    <div class="STSS__content__protection__container">
        <h4 class="STSS__content__protection__title text-uppercase">PROTECTION</h4>
        <img width="40" height="44" class="pull-right" src="images/all_base.jpg">
        <div class="STSS__content__protection__list">
            <ul>
                <li>
                    <icon-slim-tick />
                    <span>Annullamento del soggiorno</span>
                    <a href="#">
                        <icon-info style="max-width: 26px" />
                    </a>
                </li>
                <li>
                    <icon-slim-tick />
                    <span>Rimborso importo versato</span></li>
            </ul>
        </div>
        <div class="STSS__content__protection__select">
            <small>Assicura</small>
            <select aria-hidden="true" tabindex="-1" class="insurance hund select2-hidden-accessible" name="insuranceBooking" id="price_cancel">
                <option selected="selected" value="0">Acconto/Caparra</option>
                <option value="1">Tutto il soggiorno</option>
            </select>
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
    .button-added {
        cursor: default;
    }
</style>