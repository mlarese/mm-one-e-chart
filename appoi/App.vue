<template>
    <div>
        <h1> app from App component {{title}}</h1>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['title'])

    }
  }
</script>
