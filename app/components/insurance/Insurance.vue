<template>
    <div class="insurance">
        <div class="col-xs-12 col-md-8 no-p-l STSS__content">
            <insurance-selector />
        </div>

        <aside class="col-xs-12 col-md-4 no-p-r STSS__roomsNew">
            <cart />
        </aside>
    </div>
</template>
<script>
  import Cart from '../cart/Cart'
  import InsuranceSelector from './InsuranceSelector'

  export default {
    components: {
      Cart, InsuranceSelector
    }
  }
</script>