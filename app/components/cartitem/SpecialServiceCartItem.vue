<template>
    <div class="special-service-cart-item">
        <div class="STSS__roomsNew__item">
            <div class="STSS__roomsNew__item__ssr col-xs-12">
                <div>
                    <strong>{{item.name}}</strong>
                    <a class="STSS__roomsNew__item__ssr__remove" href="#" @click="onRemoveProduct">
                       <icon-remove />
                    </a>
                    <div class="STSS__roomsNew__item__ssr__qty pull-left">
                        <span class="STSS__roomsNew__item__ssr__qty__label">{{$t('Q.ta')}}</span>
                        {{item.quantity}}
                    </div>

                    <div class="STSS__roomsNew__item__price pull-right">
                        <sup-decimals :numberFrom="priceFrom" :number="realPrice" :discount="item.discount" />
                    </div>

                    <i v-if="false" class="STSS__roomsNew__acc__msg">Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in</i>
                </div>
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
  .special-service-cart-item{
      .STSS__roomsNew__item__ssr__qty__label{
        margin-right: 4px;
      }
      select {
          padding: 2px;
      }
      padding: 0px;
      margin-top: 0px;
      .STSS__roomsNew__item {
          margin-top: 0px;
          padding-right: 0px;
      }
  }

</style>