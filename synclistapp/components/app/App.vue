<template>
    <div class="app-synclyst">
        <notifications position="bottom right" />
        <rate-picker />
    </div>
</template>

<script>
  import RatePicker from '../rates/RatePicker'

  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        this.$notify(this.notification);
      },
    },
    components: {RatePicker},
    computed: {

    }
  }
</script>
