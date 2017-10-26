<template>
    <select v-bind:value="value">
        <option v-for="option in options" v-bind:value="option">{{ option }}</option>
    </select>
</template>
<script>
  import Select2 from '../select2/Select2'
  export default {
    extends: Select2
  }
</script>