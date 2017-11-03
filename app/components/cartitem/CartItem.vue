<template>
    <div class="cart-item">
        <div class="STSS__roomsNew__acc col-xs-12">
            <div>
                <strong>{{item.name}}</strong>

                <a class="STSS__roomsNew__item__ssr__remove" href="#" @click="onRemoveProduct">
                   <icon-remove />
                </a>

                <div class="STSS__roomsNew__item__ssr__qty pull-left">
                    <div class="col-xs-2 pl0">
                        <span class="STSS__roomsNew__item__ssr__qty__label">{{$t('Q.ta')}}</span>
                    </div>
                    <div class="col-xs-8 pr0">
                        <vue-select
                            class="select2-container--bootstrap"
                            :options="options"
                            v-model="item.quantity"
                        />
                    </div>
                </div>
                <div class="STSS__roomsNew__item__price pull-right">
                    <sup-decimals :numberFrom="priceFrom" :number="realPrice" :discount="item.discount" />
                </div>
                <i v-if="isPayLater" class="STSS__roomsNew__acc__msg">
                    {{$t('Payment on arrival at the tourist facility on check-in')}}
                </i>
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
    @import "cartitem";

    .cart-item{
        .STSS__roomsNew__acc{
            margin-bottom: 2px;
        }
    }

</style>