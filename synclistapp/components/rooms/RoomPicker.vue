<template>
    <div class="room-picker">
        <div v-text="$t('Camera di origine') + ': '"></div>
        <select v-model="roomId">
            <option value=""></option>
            <template v-for="r in roomsList">
                <option :value="r.room_id" v-text="r.room_name"></option>
            </template>
        </select>
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'RoomPicker',
    watch: {
      roomId () {
        if(this.roomId !== this.sourceRoomId) {
            this.setUiSourceRoom(this.roomId)
        }
      },

      sourceRoomId () {
        if(this.roomId !== this.sourceRoomId) {
          this.roomId = this.sourceRoomId
        }
      }
    },
    data () {
      return {
        roomId: null
      }
    },
    methods: {
      ...mapMutations('app', ['setUiSourceRoom'])
    },
    computed: {
      ...mapGetters('app', ['roomsList', 'sourceRoomId'])
    }
  }
</script>