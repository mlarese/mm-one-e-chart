<template>
    <div>
        <div><button @click="onChangeCategory">Change Category</button></div>
        <div><button @click="onChangePage">Change Page</button></div>
        <div><button @click="onLoadProduct1">Load Product 1</button></div>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        category: 0,
        page: 0
      }
    },
    methods: {
      ...mapActions('app', ['changeCategory', 'changeProductPage', 'selectProduct']),
      onChangeCategory () {
        this.category++
        this.changeCategory(this.category)
      },
      onChangePage () {
        this.page++
        this.changeProductPage(this.page)
      },
      onLoadProduct1 () {
        this.page++
        this.selectProduct(1)
      }
    }
  }
</script>
<style>
    button {width:160px}
</style>