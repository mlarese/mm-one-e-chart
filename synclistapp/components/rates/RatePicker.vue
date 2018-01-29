<template>
    <div class="rate-picker">
        <div v-text="$t('Listino di origine') + ': '"></div>
        <select v-model="sourceRateId">
            <option value=""></option>
            <template v-for="r in ratesWithCommonRooms">
                <option :value="r.multirate_id" v-text="r.multirate_name"></option>
            </template>
        </select>
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'RatePicker',
    data () {
      return {
        sourceRateId: null
      }
    },
    watch: {
      sourceRateId () {
        this.setUiSourceRate(this.sourceRateId)
      }

    },
    methods: {
      ...mapMutations('app', ['setUiSourceRate'])
    },
    computed: {
      ...mapState('app', ['ui']),
      ...mapGetters('app', ['rates', 'ratesWithCommonRooms'])
    }
  }
</script>