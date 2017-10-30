<template>
    <div class="ecommerce">
        <div class="col-xs-12 col-md-8 no-p-l STSS__content">
           <products />
            <div class="STSS__content__bottom">
                <a href="http://www.bookingone.it/" target="_blank" class="pull-left"><img src="images/logo_bookingone.jpg" alt="booking one"></a>
                <!-- div class="STSS__content__pagination pull-right text-right">
                    <a href="#" class="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div -->
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