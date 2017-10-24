<template>
    <div class="bound_box ST2-book STSS__accList">
    <div class="col-xs-4 col-lg-4">
        <cart-total/>
    </div>
    <div class="col-lg-4 col-xs-4">
        <room-item/>
    </div>
    <div class="col-lg-4">
        <insurance/>
    </div>
    <div class="col-lg-4">
        <cart-item/>
    </div>
        <div class="col-lg-12">
            <product-item/>
        </div>
    </div>
</template>

<script>
  import CartTotal from '../../components/carttotal/CartTotal'
  import ProductItem from '../../components/productitem/ProductItem'
  import RoomItem from '../../components/roomitem/RoomItem'
  import Insurance from '../../components/insurance/Insurance'
  import CartItem from '../../components/cartitem/CartItem'
  export default {
    components: {CartTotal, ProductItem, RoomItem, Insurance, CartItem},
    props: []
  }
</script>
<style lang="scss">
    @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins";
    @import "../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";
    @import '../../node_modules/select2/src/scss/core';

    @import "../../assets/scss/vars";
    @import "../../assets/scss/utils";
    @import "../../assets/scss/loader";

    @import '../../assets/scss/typography';

    @import '../../assets/scss/steps';
    @import "../../assets/scss/step1Body";
    @import "../../assets/scss/step2Body";
    @import "../../assets/scss/step2Resume";
    @import "../../assets/scss/stepSSBody";
    @import '../../assets/scss/step3Body';
    @import '../../assets/scss/step4Body';
    @import "../../assets/scss/modalCarousel";

    body{
        font:{
            family: $font-family-sans-serif;
            size: $font-size-base;
            color: $font-base-color;
        }
        min-width: 320px;
    }

    a,
    a:hover,
    a:focus{
        text-decoration: none;
        color: $link-base-color;
    }
    .form-control{
        border-radius: 2px;
    }
    .select2-container--bootstrap.select2-container--focus .select2-selection,
    .select2-container--bootstrap.select2-container--open .select2-selection,
    .form-control:focus {
        border-color:rgba(238, 119, 19, 0.4);
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(238, 119, 19, 0.6);
    }

    #conditions,
    .errors-box{
        width: 100%;
        margin: 0 0 15px ;
        padding: 15px;
        border:{
            radius: 4px;
        }
        p{
            margin:0;
        }
    }

    #disclaimer{
        float: left;
    }
</style>