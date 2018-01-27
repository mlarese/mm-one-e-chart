<template>
    <div class="room-picker">
        <select v-model="sourceRoomId">
            <template v-for="r in roomsList">
                <option :value="r.room_id" v-text="r.room_name"></option>
            </template>
        </select>
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'RoomPicker',
    data () {
      return {
        sourceRoomId: null
      }
    },
    computed: {
      ...mapGetters('app', ['roomsList'])
    }
  }
</script>