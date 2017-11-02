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


            <span class="STSS__accItem__qty__label" v-if="hasDiscount">
                <del>{{$t('from')}} € {{priceFrom}}</del> <strong>-{{product.discount}}%</strong>
            </span>

            <sup-decimals :number="realPrice" />

            <!-- number-spinner
                    :disabled="true"
                    :min="6"
                    :max="6"
                    inputClass="number-spinner"
                    buttonClass="button-spinner"
                    :integerOnly="true"
                    v-model="quantity"
            / -->

                <div class="STSS__accItem__qty pull-left" v-if="product">

                    <vue-select
                        class="select2-container--bootstrap"
                        :options="optionsQta"
                        :disabled="selectQuantityDisabled"
                        v-model="quantity"
                    />
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
            input[type="search"]{width:0 !important; font-size: 0;}
            input[type="search"]:focus {width:0 !important; font-size: 0;}
            input{ width:0 !important; font-size: 0;}
            .dropdown-menu {
                min-width: 65px;
                max-height: 140px !important;
            }
        }
        .button-spinner {
            -webkit-appearance: none;
            transition: background .5s ease;
            background: #387e90;
            border: 0;
            color: #fff;
            cursor: pointer;
            float: left;
            font-size: 14px;
            line-height: 15px;
            height: 30px;
            margin: 0;
            outline: none;
            width: 30px;
        }
        .number-spinner {
            -webkit-appearance: none;
            border: 1px solid #ebebeb;
            float: left;
            font-size: 12px;
            height: 30px;
            margin: 0;
            outline: none;
            text-align: center;
            width: calc(100% - 180px);
        }
    }

</style>