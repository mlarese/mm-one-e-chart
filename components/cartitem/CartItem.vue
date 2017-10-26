<template>
    <div class="cart-item">
        <div class="STSS__roomsNew__acc col-xs-12">
            <div>
                <strong>{{item.name}}</strong>

                <a class="STSS__roomsNew__item__ssr__remove" href="#" @click="onRemoveProduct">
                   <icon-remove />
                </a>

                <div class="STSS__roomsNew__item__ssr__qty pull-left">
                    <span class="STSS__roomsNew__item__ssr__qty__label">{{$t('Q.ta')}}</span>
                    {{item.quantity}}
                    <!-- select2 style="width: 50px;display:inline-block" v-model="item.quantity+''" :options="options" / -->
                </div>
                <div class="STSS__roomsNew__item__price pull-right">
                    <sup-decimals :numberFrom="item.priceFrom" :number="realPrice" :discount="item.discount" />
                </div>
                <i v-if="false" class="STSS__roomsNew__acc__msg">Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in</i>
            </div>
        </div>
    </div>
</template>

<script>
  import BaseCartItem from './BaseCartItem'
  export default {
    extends: BaseCartItem
  }
</script>

<style lang="scss">
  .cart-item{
      select {
          padding: 2px;
      }
  }

  .default {
      .v-select input[type=search],
      .v-select input[type=search]:focus {
          height: 20px;
          font-size: 10px;
          width: 0 !important;
      }
      .v-select .selected-tag {
          height: 20px;
          padding: 2px .25em;
          line-height: 10px;
          font-size: 12px;
      }
      .v-select .open-indicator {
          position: absolute;
          bottom: 6px;
          right: 10px;
          cursor: pointer;
          pointer-events: all;
          opacity: 1;
          height: 15px;
      }
  }
</style>