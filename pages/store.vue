<template>
    <div>
        <button @click="onChangeCategory">Change category</button>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        category: 0
      }
    },
    methods: {
      ...mapActions('app', ['changeCategory']),
      onChangeCategory () {
        this.category++
        this.changeCategory(this.category)
      }
    }
  }
</script>