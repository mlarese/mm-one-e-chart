<template>
    <div>
        {{currentRooms}}
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters('app', ['currentRooms'])
    }
  }
</script>