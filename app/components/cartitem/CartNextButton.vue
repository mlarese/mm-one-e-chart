<template>
    <div class="STSS__roomsNew__send text-center cart-next-button">
        <button v-if="!isStep3" class="btn form-control text-uppercase" @click="onClick">{{$t('continue')}}</button>
        <input v-if="isStep3" type="button" @click="triggerClick" class="confirm confirm_it ST3__submit" name="submit_butt_c" :value="$t('Book')" />
        <div v-if="isStep3" v-html="infoText"></div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $jq from 'jquery'
  export default {
    name: 'CartNextButton',
    methods: {
      triggerClick () {
        $jq( "#submit_butt" ).trigger( "click" );
      },
      onClick () {
        window.location = this.nextStep
      }
    },
    computed: {
      ...mapGetters('app', ['nextStep', 'isStep3', 'infoText']),

    }
  }
</script>

<style>
    .cart-next-button .ST3__submit {
        background: linear-gradient(#f3a75a 0%, #ee8113 100%);
        border-radius: 3px;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        outline: none !important;
        height: 45px;
        padding: 9px 12px;
        border: none;
        width: 165px;
    }
</style>