<template>
    <select :value="value">
        <option v-for="option in options" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
  import 'select2'
  import 'select2/dist/css/select2.css'

  let $loc
  if (window.$){
    $loc = window.$
  } else {
    $loc = require('jquery')
  }

  export default {
    name: 'select2',
    data () {
      return {
        mounted: false
      }
    },
    props: {
      value: {default: ''},
      options: {default: () => []},
      config: {default: () => {}}
    },

    mounted () {
      if (this.mounted) {
        return
      }
      $loc(this.$el).ready(() => {
        $loc(this.$el).select2(this.config)
        $loc(this.$el).on('change', (e) => {
          this.$emit('input', e.target.value)
        })
      })
      this.mounted = true
    },
    beforeDestroy () {
      $loc(this.$el).select2('destroy')
    }
  }
</script>