<template>
    <div>
        <div class="col-xs-6">parent a before</div>
        <div class="col-xs-6">parent b before</div>

        <two-cols class="col-sm-4" />
        <two-cols class="col-sm-4" />
        <two-cols class="col-sm-4" />

        <div class="col-xs-6">parent a after</div>
        <div class="col-xs-6">parent b after</div>


    </div>
</template>
<script>
  import TwoCols from '../components/TwoCols'

  export default {
    components: {TwoCols}
  }
</script>

<style>
    .bg-primary {background: red !important;}
</style>