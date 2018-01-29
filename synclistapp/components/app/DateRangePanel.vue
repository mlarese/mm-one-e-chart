<template>
    <div>
        <input v-model="ui.dateRange" type="checkbox"> <label v-text="$t('Periodo')"></label>
        <fieldset v-if="ui.dateRange">
            <div>
                <div ></div>
                <masked-input v-model="ui.fromDate" class="form-control" mask="11-11-1111"   />
            </div>
            <div>
                <masked-input v-model="ui.toDate" class="form-control" mask="11-11-1111" />
            </div>
        </fieldset>

    </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import {mapState, mapGetters, mapMutations} from 'vuex'
  import momment from 'moment'

  export default{
    name: 'DateRangePanel',
    watch: {
      'ui.fromDate' () { this.update() },
      'ui.toDate' () { this.update() },
      'ui.dateRange' (val) {
        if(val) {

        }
        this.ui.fromDate = ""
        this.ui.toDate = ""
      }
    },
    components: {
      MaskedInput
    },
    methods: {
      ...mapMutations('app', ['update'])
    },
    computed: {
      ...mapState('app', ['ui'])
    }
  }
</script>