<template>
    <div class="widget-products">
        <div v-if="categories.length > 1">
            <group-bar :groupList="categories" :groupCurrent="currentCategory" @change-group="changeCategory" />
        </div>

        <span class="ST2-book__choose">
            {{$t('Choose the services that will make your stay a unique experience, otherwise press the “Continue” button.')}}
        </span>

        <span class="produts-list">
            <template v-for="(product, index) in products">
                <product-item-factory :product="product" :index="index" :key="product.id" />
            </template>
        </span>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import GroupBar from '../groups/GroupBar'
  import ProductItemFactory from '../productitem/ProductItemFactory'

  export default {
    name: 'Products',
    methods: {
      ...mapActions('app', ['changeCategory'])
    },
    computed: {
      ...mapGetters('app', ['currentCategory', 'categories']),
      ...mapGetters('products', ['products'])
    },
    components: {GroupBar, ProductItemFactory}
  }
</script>