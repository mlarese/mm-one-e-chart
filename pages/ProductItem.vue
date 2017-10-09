<template>
    <div>
        -  ({{product.productId}}) {{product.productName}}
        q.ty = {{product.inventory}}
        cart = {{product.cart}}
        available = {{product.available}}
    </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>