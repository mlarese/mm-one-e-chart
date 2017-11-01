<template>
    <div class="STSS__roomsNew__item">
        <img :src="room.photo" class="pull-left STSS__roomsNew__item__image">
        <h4 class="STSS__roomsNew__item__title text-uppercase">{{room.name}}</h4>
        <div class="STSS__roomsNew__item__desc">
            <icon-cup></icon-cup>
            <span>{{$t(room.treatment)}}</span>

        </div>
        <div class="STSS__roomsNew__item__price">
            <sup-decimals
                    :numberFrom="room.priceFrom"
                    :number="room.price"
                    :discount="room.discount"
            />

        </div>

    </div>
</template>

<script>
  import IconTick from '../icons/IconTick'
  import IconCup from '../icons/IconCup'
  import SupDecimals from '../display/SupDecimalsVx'

  export default {
    props: {
      index: {default: 0},
      room: {
        default: () => ({
          pax: 1,
          rowId: 0,
          name: 'TRIPLIA DELUXE',
          photo: '../images/rooms_01.jpg',
          price: 453,
          priceFrom: '546',
          discount: 20,
          treatment: 'BB'
        })
      }
    },
    components: {
      SupDecimals,
      IconTick, IconCup, SupDecimals}
  }
</script>

<style>

</style>