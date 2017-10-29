<template>
    <select :value="value">
        <option v-for="option in options" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
  import $ from 'jquery'
  import 'select2'
  import 'select2/dist/css/select2.css'
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
      $(this.$el).ready(() => {
        $(this.$el).select2(this.config)
        $(this.$el).on('change', (e) => {
          this.$emit('input', e.target.value)
        })
      })
      this.mounted = true
    },
    beforeDestroy () {
      $(this.$el).select2('destroy')
    }
  }
</script>