<template>
    <span class="cart-rooms">
        <template v-for="(room, index) in rooms">
            <room-item :room="room"/>
            <template v-for="item in roomSpecialServices(index)">
                <special-service-cart-item  :item="item"/>
            </template>
        </template>
    </span>

</template>
<script>
  import RoomItem from '../roomitem/RoomItem'
  import SpecialServiceCartItem from '../cartitem/SpecialServiceCartItem'
  import {mapGetters} from 'vuex'

  export default {
    name: 'CartRooms',
    components: {RoomItem, SpecialServiceCartItem},
    computed: {
      ...mapGetters('cart', ['roomSpecialServices', 'rooms'])
    }
  }
</script>