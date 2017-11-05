<template>
    <div class="STSS__roomsNew__send text-center">
        <button v-if="!isStep3" class="btn form-control text-uppercase" @click="onClick">{{$t('continue')}}</button>
        <input v-if="isStep3" type="button" onclick="submitForm(this.form)" class="confirm confirm_it ST3__submit" id="submit_butt" name="submit_butt" value="Prenota" />
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    methods: {
      onClick () {
        window.location = this.nextStep
      }
    },
    computed: {
      ...mapGetters('app', ['nextStep', 'isStep3']),

    }
  }
</script>