<template>
    <div>
        {{noVirtuals}}
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters('rooms', ['noVirtuals'])
    }
  }
</script>