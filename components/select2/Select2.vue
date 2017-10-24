<template>
    <select v-model="model" class="form-control">
        <option disabled>Select...</option>
        <option v-for="opt in options" :value="opt.id">{{ opt.text }}</option>
    </select>
</template>
<script>
  export default {
    props: {
      'options': {
        type: Array,
        required: true,
        default: () => []
      },
      'value': {
        default: () => ''
      }
    },
    data () {
      return {
        model: ''
      }
    },
    mounted () {
      this.model = this.value
    },
    watch: {
      model (model) {
        this.$emit('input', model)
      },
      value (value) {
        this.model = value
      }
    }
  }
</script>