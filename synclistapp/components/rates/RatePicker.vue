<template>
    <div class="rate-picker">
        <select v-model="ui.sourceRate">
            <template v-for="r in rates">
                <option :value="r.multirate_id" v-text="r.multirate_name"></option>
            </template>
        </select>
        {{ui}}
    </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'RatePicker',
    computed: {
      ...mapState('app', ['ui']),
      ...mapGetters('app', ['rates'])
    }
  }
</script>