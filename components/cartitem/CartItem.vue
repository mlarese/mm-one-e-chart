<template>
    <div class="cart-item">
        <div class="STSS__roomsNew__acc col-xs-12">
            <div>
                <strong>{{item.description}}</strong>

                <a class="STSS__roomsNew__item__ssr__remove" href="#" @click="onRemoveProduct">
                   <icon-remove />
                </a>

                <div class="STSS__roomsNew__item__ssr__qty pull-left">
                    <span class="STSS__roomsNew__item__ssr__qty__label">{{$t('Q.ta')}}</span>

                    <select2 style="width: 50px;display:inline-block" v-model="item.quantity+''" :options="options" />
                </div>
                <div class="STSS__roomsNew__item__price pull-right">
                    <sup-decimals :number="item.price" />
                </div>
                <i v-if="false" class="STSS__roomsNew__acc__msg">Il pagamento avviene all’arrivo nella struttura turistica il giorno del check-in</i>
            </div>
        </div>
    </div>
</template>

<script>
  import IconRemove from '../icons/IconRemove'
  import {SupDecimalsVxConnect} from '../display/subdecimalshoc'
  import {mapActions} from 'vuex'
  import Select2 from 'vue-select'

  const SupDecimals = SupDecimalsVxConnect('app')

  export default {
    methods: {
      ...mapActions('cart', ['removeProduct']),
      onRemoveProduct () {
        this.removeProduct({cartIndex: this.index})
      }
    },
    computed: {
      options () {
        let options = []
        for (let i = 0; i < 10; i++) {
          options.push(i + '')
        }
        return options
      }
    },
    props: {
      index: {default: 0},
      item: {
        default: () => ({
          name: 'transfer to aeroporto di vce',
          previousAmount: '£1020',
          discount: -32,
          price: '£4200',
          quantity: 1
        })
      }
    },
    components: {IconRemove, SupDecimals, Select2}
  }
</script>

<style lang="scss">
  .cart-item{
      .STSS__roomsNew__item__ssr__qty__label{
        margin-right: 4px;
      }

      select {
          padding: 2px;
      }

  }

  .v-select input[type=search],
  .v-select input[type=search]:focus {
      height:20px;
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

</style>