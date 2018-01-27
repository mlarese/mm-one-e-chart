<template>
    <div class="app-synclyst">
        <notifications position="bottom right" />
        <rate-picker />
        <room-picker v-if="hasRooms" />
    </div>
</template>

<script>
  import RatePicker from '../rates/RatePicker'
  import RoomPicker from '../rooms/RoomPicker.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        this.$notify(this.notification);
      },
    },
    components: {RatePicker, RoomPicker},
    computed: {
      ...mapGetters('app', ['hasRooms'])
    }
  }
</script>
