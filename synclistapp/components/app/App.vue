<template>
    <div class="app-synclyst">
        <notifications position="bottom right" />
        <h4>
            <span v-text="$t('Listino destinazione') + ':' "></span>
            <span v-text="targetRate.multirate_name"></span>
        </h4>
        <rate-picker style="margin-bottom:10px" />
        <room-picker v-if="hasRooms" style="margin-bottom:10px" />

        <date-range-panel />

        <div class="app-synclyst-tool-bar">
            <button v-text="$t('Annulla')"></button>
            <button :disabled="!canSync" v-text="$t('Sincronizza')"></button>
        </div>
    </div>
</template>

<script>
  import RatePicker from '../rates/RatePicker'
  import RoomPicker from '../rooms/RoomPicker'
  import DateRangePanel from './DateRangePanel'

  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name:'App',
    watch:{
      'notification.id'(val){
        this.$notify(this.notification);
      },
    },
    components: {RatePicker, RoomPicker, DateRangePanel},
    computed: {
      ...mapGetters('app', ['hasRooms', 'targetRate', 'canSync'])
    }
  }
</script>

<style lang="scss">
    .app-synclyst {
        select {min-width: 200px}
    }
</style>
