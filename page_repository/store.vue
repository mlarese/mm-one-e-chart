<template>
    <div>
        <div><button @click="onChangeCategory">Change Category</button></div>
        <div><button @click="onChangePage">Change Page</button></div>
        <div><button @click="onLoadProduct1">Load Product 1</button></div>
        <div><button @click="removeProduct({cartIndex: 2})">Remove Product idx=2</button></div>
        <div><button @click="removeQuantity({cartIndex: 2})">Remove quantity idx=2</button></div>
        <div><button @click="addQuantity({cartIndex: 2, quantity: 2})">Add quantity idx=2</button></div>
        <div><button @click="addProduct({rowId: 44, product, quantity: 12})">Add 12 products row 44</button></div>
        <div><button @click="restoreBackup">Restore cart</button></div>

        <div>Items rowId 1 = {{itemsByRowId(1).length}}</div>
        <div>Items productId 2 = {{itemsByProductId(2).length}}</div>
        <div>Item rowId 1 productId 2  = {{itemByRowIdProductId(1, 2).name}}</div>


        <template v-for="(i, index) in items">
            <div v-if="i">
                {{index}}) id:{{i.id}} rowId:{{i.rowId}} <b>qta: {{i.quantity}}</b>
            </div>
        </template>

    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {products} from '../storeimp/api/fixtures/products'

  export default {
    data () {
      return {
        category: 0,
        page: 0
      }
    },
    computed: {
      ...mapGetters('cart', ['itemsByRowId', 'itemsByProductId', 'itemByRowIdProductId', 'items']),
      product () {
        return products[51]
      }
    },
    methods: {
      ...mapActions('cart', ['restoreBackup', 'addProduct', 'addQuantity', 'removeQuantity', 'removeProduct']),
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