<template>
    <div class="elementAccessories STSS__accItem product-item">
        <div class="col-xs-12 col-sm-7 no-p-l">
            <img :src="product.photo" class="STSS__accItem__photo pull-left product-item-photo">

            <div class="descriptionAccessories STSS__accItem__desc STSS__accItem__desc--acc">
                <div class="accessoryName text-uppercase">{{product.name}}</div>

                <div class="panel-group">
                    <div class="panel panel-default">

                        <div id="headingOne" role="tab" class="panel-heading">
                            <span
                                    class="STSS__accItem__desc__short hidden-xs"
                                    v-if="true || !showDetails"
                                    v-html="shortDescription"
                            >
                            </span>
                            <span>&nbsp;</span>
                            <a
                                    role="button"
                                    class="STSS__accItem__desc__tgl"
                                    :class="{collapsed: !showDetails}"
                                    @click="toggleShowDetails">
                                {{$t('Details')}}
                            </a>
                        </div>
                    </div>

                </div>


            </div>

        </div>

        <div
             class="col-xs-12 col-sm-5 STSS__accItem__priceNew  no-p-l"
             :class="{'STSS__accItem__priceNew--add': isInCart}">

            <small>{{$t('Single price')}}</small>


            <sup-decimals :numberFrom="product.priceFrom" :number="realPrice" :discount="product.discount" />


                <div class="STSS__accItem__qty pull-left" v-if="product">


                    <number-input-spinner
                            :disabled="true"
                            :min="6"
                            :max="6"
                            :integerOnly="true"
                            v-model="quantity"
                    />

                    <!--vue-select
                        class="select2-container--bootstrap"
                        :options="optionsQta"
                        :value.sync="quantity"
                        :disabled="selectQuantityDisabled"
                        v-model="quantity"
                    /-->
                </div>

            <button
                    v-if="!isInCart"
                    :disabled="!canAdd"
                    @click="onAdd"
                    class="STSS__accItem__priceNew__button
                    STSS__accItem__priceNew--add text-uppercase pull-right ">
                {{$t('Add')}}
            </button>
            <button v-if="isInCart" class="STSS__accItem__priceNew__button  text-uppercase pull-right">
                {{$t('Added')}}
                <icon-tick />
            </button>
        </div>

        <div class="col-xs-12 panel-collapse STSS__accItem__desc__tgl-txt" :class="{collapse: !showDetails, 'collapse.in': showDetails}" >
            <div class="panel-body"><p v-html="product.description"></p></div>
        </div>
    </div>
</template>

<script>
  import BaseProductItem from './BaseProductItem'
  import NumberInputSpinner from "../../node_modules/vue-number-input-spinner/src/components/NumberInputSpinner.vue";
  export default {
    components: {NumberInputSpinner},
    extends: BaseProductItem
  }
</script>

<style lang="scss">
    .product-item{
        .select2-container--bootstrap .select2-selection,
        .v-select .dropdown-toggle {
            border-radius: 0 !important;
        }
        .v-select {
            input {
                width:0 !important;
            }
        }
    }

</style>