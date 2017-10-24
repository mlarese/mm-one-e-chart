<template>
    <div class="special-service-cart-item">
        <div class="STSS__roomsNew__item">
            <div class="STSS__roomsNew__item__ssr col-xs-12">
            <div>
                <strong>{{item.description}}</strong>

                <a class="STSS__roomsNew__item__ssr__remove" href="#" @click="onRemoveProduct">
                   <icon-remove />
                </a>

                <div class="STSS__roomsNew__item__ssr__qty pull-left">
                    <span class="STSS__roomsNew__item__ssr__qty__label">{{$t('Q.ta')}}</span>
                </div>
                <div class="STSS__roomsNew__item__price pull-right">
                    <sup-decimals :number="item.price" />
                </div>
                <i v-if="false" class="STSS__roomsNew__acc__msg">Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in</i>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  import IconRemove from '../icons/IconRemove'
  import {SupDecimalsVxConnect} from '../display/subdecimalshoc'
  import {mapActions} from 'vuex'

  const SupDecimals = SupDecimalsVxConnect('app')

  export default {
    methods: {
      ...mapActions('cart', ['removeProduct']),
      onRemoveProduct () {
        this.removeProduct({cartIndex: this.index})
      }
    },

    props: {
      index: {default: 0},
      item: {
        default: () => ({
          name: 'transfer to aeroporto di vce',
          previousAmount: '£1020',
          discount: -32,
          price: '£4200'
        })
      }
    },
    components: {IconRemove, SupDecimals}
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