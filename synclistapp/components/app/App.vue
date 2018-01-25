<template>
    <div class="app-synclyst">
        <notifications position="bottom right" />
        <room-picker />
    </div>
</template>

<script>
  import RoomPicker from '../rooms/RoomPicker'

  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        this.$notify(this.notification);
      },
    },
    components: {RoomPicker},
    computed: {

    }
  }
</script>
