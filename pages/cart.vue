<template>
  <div>
    <template v-for="(roomRow, keys, index) in roomsCart">
      <template v-for="({item, quantity, room, productPrice}, itemsIndex) in roomRow">
        <div style="margin-top:10px" v-if="itemsIndex===0">- {{room.reservation_detail_code}} total: {{room.reservation_detail_price}}</div>
        <div>({{item.product_id}}) {{item.product_name}} q.tà={{quantity}} prezzo={{productPrice}}</div>
      </template>
    </template>

    <br>
    <div>Total cart: {{totalCartPrice}} </div>
    <div>Total rooms: {{totalRoomsPrice}} - {{totalRoomsQuantity}} rooms</div>
    <div>--------------------------------------</div>
    <div>Gran Total: {{granTotal}} </div>
    <br>
    <button @click="add">Add 1 Mouse</button>
    <button @click="remove">Decrement Monitor from sng</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions('tests', ['add', 'remove'])
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
</style>
