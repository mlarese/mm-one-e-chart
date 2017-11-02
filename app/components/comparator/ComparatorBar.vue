<template>
    <div>
        bar {{progressPercent}}
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters('comparator', ['progressPercent'])
    }
  }
</script>