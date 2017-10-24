<template>
    <div class="elementAccessories STSS__accItem product-item">
        <div class="col-xs-12 col-sm-7 no-p-l">
            <img :src="photo" class="pull-left">
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
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label for="basic" class="col-xs-2 col-lg-2 control-label"></label>
                            <div class="col-lg-2">
                                <select id="basic" class="selectpicker show-tick form-control">
                                    <option>cow</option>
                                    <option data-subtext="option subtext">bull</option>
                                    <option class="get-class" disabled="">ox</option>
                                    <optgroup label="test" data-subtext="optgroup subtext">
                                        <option>ASD</option>
                                        <option selected="">Bla</option>
                                        <option>Ble</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-5 STSS__accItem__priceNew STSS__accItem__priceNew--add no-p-l">
            <small>{{$t('Total')}}</small>
            <span class="STSS__accItem__qty__label">{{$t('Quantity')}}</span>
            <em>{{product.price}}<sup>,{{product.decimalAmount}}</sup></em>
            <div class="STSS__accItem__qty pull-left">
                <select aria-hidden="true" tabindex="-1" id="accessorySel_3" name="accessorySel[3]" class="selectAccessories select2-hidden-accessible">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <span dir="ltr" class="select2 select2-container select2-container--bootstrap" style="width: 1px;">
                <span class="selection"><span aria-expanded="false" aria-haspopup="true" role="combobox" tabindex="-1" aria-labelledby="select2-accessorySel_3-container" class="select2-selection select2-selection--single base-select-custom">
                    <span id="select2-accessorySel_3-container" title="0" class="select2-selection__rendered">0</span>
                    <span role="presentation" class="select2-selection__arrow"><b role="presentation"></b></span>
                </span>
                </span>
                    <span aria-hidden="true" class="dropdown-wrapper">
                    </span>
                </span>
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
  import IconTick from '../../Icons/IconTick'
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