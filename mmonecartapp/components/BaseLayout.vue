<template>
    <div>

    </div>
</template>
<script>
  let vueClickyMounted = false
  export default {
    name: 'BaseLayout',
    mounted () {
      if (!vueClickyMounted) {
        if (process.env.NODE_ENV === 'development') {
          require('vue-clicky')
        }
        vueClickyMounted = true
      }
    }
  }
</script>