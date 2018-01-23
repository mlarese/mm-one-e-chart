<template>
    <div class="ecommerce special">
        <div class="col-xs-12 col-sm-8 no-p-l STSS__content">
           <products :products="visibleProducts" />
            <div class="STSS__content__bottom">
                <!-- a href="http://www.bookingone.it/" target="_blank" class="pull-left"><img src="images/logo_bookingone.jpg" alt="booking one"></a -->
                <div class="clear-resizer"></div>
            </div>
        </div>

        <aside class="col-xs-12 col-sm-4 no-p-r STSS__roomsNew">
            <cart />
        </aside>



    </div>
</template>
<script>
  import Cart from '../cart/Cart'
  import Products from '../products/Products'
  import BaseEcommerce from './BaseEcommerce'

  export default {
    name: 'Special',
    extends: BaseEcommerce,
    components: {Cart, Products}
  }
</script>

<style>
    .ecommerce{
        .clear-resizer{
            clear:both;
            height:150px;
        }
    }
</style>