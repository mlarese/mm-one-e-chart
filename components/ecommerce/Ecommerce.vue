<template>
    <div class="ecommerce">
        <div class="col-xs-12 col-sm-8 no-p-l STSS__content">
           <products />
        </div>

        <aside class="col-xs-12 col-sm-4 no-p-r STSS__roomsNew">
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