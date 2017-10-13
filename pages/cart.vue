<template>
  <div>
    <template v-for="(roomRow, keys, index) in roomsCart">
      <template v-for="({rowId, productId, productName, quantity, room, productPrice, roomDescription, roomPrice}, itemsIndex) in roomRow">
        <div style="margin-top:10px" v-if="itemsIndex===0">- {{roomDescription}} total: {{roomPrice}}</div>
        <div> ({{rowId}}) {{productId}}-{{productName}} q.tà={{quantity}} prezzo={{productPrice}}</div>
      </template>
    </template>

    <br>
    <div>Total cart: {{totalCartPrice}} </div>
    <div>Total rooms: {{totalRoomsPrice}} - {{totalRoomsQuantity}} rooms</div>
    <div>--------------------------------------</div>
    <div>Gran Total: {{granTotal}} </div>

    <div style="text-align: center; margin-top:30px">
      <div>
        <button @click="add({productId: 2})">Add pid 2 on triple</button>
        <button @click="add({productId: 4})">Add pid 4 on triple</button>
        <button @click="add({productId: 4, roomDescription: 'single', rowId: 122, roomId: 2, roomPrice: 800})">Add pid 4 on single</button>
      </div>
      <div>
        <button @click="resetCart">Reset local cart</button>
        <button @click="loadCart">Load cart</button>
      </div>
      <div>
        <sup-decimals />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import SupDecimals from '../components/display/SupDecimals'

  export default {
    components: {
      SupDecimals
    },
    methods: {
      ...mapActions('tests', ['add', 'remove']),
      ...mapActions('shop/linearcart', ['loadCart', 'resetCart'])
    },
    computed: {
      ...mapState('api', ['error']),
      ...mapGetters('shop/linearcart', ['roomsCart', 'findByProduct', 'totalCartPrice', 'totalRoomsPrice', 'granTotal', 'totalRoomsQuantity'])
    }
  }
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}

button {
  width:200px;
}
</style>
