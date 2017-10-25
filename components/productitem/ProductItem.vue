<template>
    <div class="elementAccessories STSS__accItem product-item">
        <div class="col-xs-12 col-sm-7 no-p-l">
            <img :src="product.photo" class="pull-left">
            <div class="descriptionAccessories STSS__accItem__desc STSS__accItem__desc--acc">
                <div class="accessoryName text-uppercase">{{product.name}}</div>
                <div aria-multiselectable="true" role="tablist" class="panel-group">
                    <div class="panel panel-default"><div id="headingOne" role="tab" class="panel-heading">
                        <span class="STSS__accItem__desc__short hidden-xs">{{product.description}}</span>
                        <a aria-controls="collapse-1" aria-expanded="true" href="#collapse-1" data-parent="#accordion" data-toggle="collapse" role="button" class="collapsed STSS__accItem__desc__tgl">
                            {{$t('Details')}}               </a></div><div aria-labelledby="heading-1" role="tabpanel" id="collapse-1" class="panel-collapse collapse STSS__accItem__desc__tgl-txt">
                        <div class="panel-body"><p>{{product.detail}}</p></div>
                    </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-5 STSS__accItem__priceNew STSS__accItem__priceNew--add no-p-l">
            <small>{{$t('Total')}}</small>
            <span class="STSS__accItem__qty__label">{{$t('Quantity')}}</span>
            <em>{{product.price}}<sup>,{{product.decimalAmount}}</sup></em>
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
  export default {
    methods: {
      onAdd () {
        this.$emit('on-add')
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
    components: {IconTick}
  }
</script>

<style>

</style>