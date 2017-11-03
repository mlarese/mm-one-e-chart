<template>
    <div class="STSS__roomsNew__send text-center">
        <button class="btn form-control text-uppercase" @click="onClick">{{$t('continue')}}</button>
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
      ...mapGetters('app', ['nextStep'])
    }
  }
</script>