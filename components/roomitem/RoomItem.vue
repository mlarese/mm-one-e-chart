<template>
    <div class="STSS__roomsNew__item" style="background-color: lightgrey">
        <img :src="room.photo" class="pull-left STSS__roomsNew__item__image">
        <h4 class="STSS__roomsNew__item__title text-uppercase">{{room.name}}</h4>
        <div class="STSS__roomsNew__item__desc">
            <icon-tick />
            <span>{{room.detailedDescription}}</span>
        </div>
        <div class="STSS__roomsNew__item__price"><del> {{previousAmount}}</del><span> {{room.discount}}%</span>
            <em> {{totalAmount}}<sup>,{{decimalAmount}}</sup></em>
        </div>
    </div>
</template>

<script>
  import IconTick from '../icons/IconTick'

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
          previousAmount: '546',
          discount: 20,
          treatment: 'Mezza Pensione'
        })
      }
    },
    components: {IconTick}
  }
</script>

<style>

</style>