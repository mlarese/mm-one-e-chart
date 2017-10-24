<template>
  <div>
    <div> <group-bar /> </div>
    <div style=" background: black; color: white;padding:10px;margin-bottom:20px;">
       <h4>Carrello</h4>
       <cart />
    </div>
    <products />
  </div>
</template>

<script>
  import cart from './cart'
  import Bar from '../components/groups/GroupBar'
  import Products from '../components/infinityproducts/InfinityProducts'
  import {connect} from '../assets/hoc'

  const GroupBar = connect('shop/products', Bar)
  export default {
    components: {Products, cart, GroupBar}
  }
</script>