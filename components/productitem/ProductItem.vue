<template>
    <div class="elementAccessories STSS__accItem product-item">
        <div class="col-xs-12 col-sm-7 no-p-l">
            <img :src="product.photo" class="pull-left product-item-photo">
            <div class="descriptionAccessories STSS__accItem__desc STSS__accItem__desc--acc">
                <div class="accessoryName text-uppercase">{{product.name}}</div>
                <div aria-multiselectable="true" role="tablist" class="panel-group">
                    <div class="panel panel-default">
                        <div id="headingOne" role="tab" class="panel-heading">
                        <span class="STSS__accItem__desc__short hidden-xs" v-if="!showDetails">
                            {{product.shortDescription}}&nbsp;
                        </span>
                        <a role="button" class="STSS__accItem__desc__tgl" :class="{collapsed: !showDetails}" @click="toggleShowDetails">
                            {{$t('Details')}}
                        </a>
                        </div>

                        <div role="tabpanel" class="panel-collapse STSS__accItem__desc__tgl-txt" :class="{collapse: !showDetails, 'collapse.in': showDetails}" >
                            <div class="panel-body"><p>{{product.description}}</p></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-5 STSS__accItem__priceNew STSS__accItem__priceNew--add no-p-l">
            <small>{{$t('Total')}}</small>
            <span class="STSS__accItem__qty__label">{{$t('Quantity')}}</span>

            <sup-decimals :numberFrom="product.priceFrom" :number="product.finalPrice" :discount="product.discount" />

            <div class="STSS__accItem__qty pull-left">


            </div>

            <button v-if="product.inventory>0" @click="onAdd"  data-target="#modalDet" data-toggle="modal" class="STSS__accItem__priceNew__button STSS__accItem__priceNew--add text-uppercase pull-right ">
                {{$t('Add')}}
            </button>
            <button v-if="product.inventory<=0" class="STSS__accItem__priceNew__button  text-uppercase pull-right">
                {{$t('Added')}}
                <icon-tick />
            </button>
        </div>
    </div>

</template>

<script>
  import IconTick from '../icons/IconTick'
  import SupDecimals from '../display/SupDecimalsVx'
  export default {
    methods: {
      toggleShowDetails () {
        this.showDetails = !this.showDetails
      },
      onAdd () {
        this.$emit('on-add')
      }
    },
    data () {
      return {
        showDetails: false
      }
    },
    props: {
      product: {default: () => ({
        photo: '../images/img_service01.jpg',
        name: 'INGRESSO CENTRO TERMALE',
        description: 'cahshhsajsjjajsh shbjhsa shhsankhkuwhuyu nabshbuwq',
        detail: 'sabjbhajbhjsbjadbjabhdjhbjjhbjh',
        price: '£455',
        decimalAmount: 45,
        inventory: 3
      })}
    },
    components: {IconTick, SupDecimals}
  }
</script>

<style lang="scss">
    .product-item{
        .product-item-photo{
            width: 125px;
            height: 125px;
        }
    }
</style>