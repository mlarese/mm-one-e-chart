<template>
    <div class="ecommerce">
        <div class="col-xs-12 col-md-8 no-p-l STSS__content">
           <products />
            <div class="STSS__content__bottom">
                <a href="http://www.bookingone.it/" target="_blank" class="pull-left"><img src="images/logo_bookingone.jpg" alt="booking one"></a>
                <div class="clear-resizer"></div>
            </div>
        </div>

        <aside class="col-xs-12 col-md-4 no-p-r STSS__roomsNew">
            <cart />
        </aside>

    </div>
</template>
<script>
  import Cart from '../cart/Cart'
  import Products from '../products/Products'

  export default {
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