<template>
    <div class="ecommerce bound_box ST2-book STSS__accList">
        <div class="col-xs-12 col-md-8 no-p-l STSS__content">
           <group-bar :groupList="categories" :groupCurrent="currentCategory" @change-group="changeCategory" />
           <span class="ST2-book__choose">Scegli i servizi che renderanno unico il tuo soggiorno, altrimenti premi il pulsante "prosegui".</span>
        </div>

        <aside class="col-xs-12 col-md-4 no-p-r STSS__roomsNew">
            <h3 class="STSS__roomsNew__title">Il tuo soggiorno</h3>

            <template v-for="(item, index) in items">
                <cart-item-factory :item="item" :index="index" />
            </template>

        </aside>
    </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import GroupBar from '../groups/GroupBar'
  import CartItemFactory from '../cartitem/CartItemFactory'
  export default {
    methods: {
      ...mapActions('app', ['changeCategory'])
    },
    components: {GroupBar, CartItemFactory},
    computed: {
      ...mapGetters('app', ['currentCategory']),
      ...mapGetters('categories', ['categories']),
      ...mapGetters('cart', ['items'])
    }
  }
</script>