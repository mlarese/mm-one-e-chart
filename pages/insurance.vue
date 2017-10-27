<template>
    <div class="insurance-page container no-pd-xs">
        <div class="bound_box ST2-book STSS__accList">
            <insurance />
        </div>
    </div>
</template>
<script>
  import Insurance from '../components/insurance/Insurance'

  export default {
    components: {Insurance},
    head: {
      link: [
        { rel: 'stylesheet', href: 'css/main.css' },
        { rel: 'stylesheet', href: 'css/extend.css' }
      ]
    }
  }
</script>