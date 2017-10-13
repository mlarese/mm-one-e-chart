<template>
    <div style="height:150px; padding:4px; margin-bottom:5px; background: blanchedalmond">
        <span style="font:15px">
            -  ({{product.productId}}) {{product.productName}}
            q.ty = {{product.inventory}}
            cart = {{product.cart}}
            available = {{product.available}}
        </span>
    </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>