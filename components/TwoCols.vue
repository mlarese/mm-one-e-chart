<template>
    <boostrap-container>
        <div class="panel widget bg-primary">
            <div class="row row-table">
                <div class="col-xs-4 text-center bg-primary-dark pv-lg">
                    <em class="icon-cloud-upload fa-3x"></em>
                </div>
                <div class="col-xs-8 pv-lg">
                    <div class="h2 mt0">1700</div>
                    <div class="text-uppercase">Uploads</div>
                </div>
            </div>
        </div>
    </boostrap-container>
</template>

<script>
  import BoostrapContainer from '../components/BoostrapContainer'

  export default {
    props: {
      name: {default: () => 'C_' + Math.random()}
    },
    components: {
      BoostrapContainer
    }
  }
</script>

