<template>
    <div>
        <div><button @click="onChangeCategory">Change Category</button></div>
        <div><button @click="onChangePage">Change Page</button></div>
        <div><button @click="onLoadProduct1">Load Product 1</button></div>

        <div>Items rowId 1 = {{itemsByRowId(1).length}}</div>
        <div>Items productId 2 = {{itemsByProductId(2).length}}</div>
        <div>Item rowId 1 productId 2  = {{itemByRowIdProductId(1, 2).name}}</div>
    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        category: 0,
        page: 0
      }
    },
    computed: {
      ...mapGetters('cart', ['itemsByRowId', 'itemsByProductId', 'itemByRowIdProductId'])
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