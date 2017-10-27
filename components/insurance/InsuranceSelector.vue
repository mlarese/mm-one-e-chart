<template>
    <div class="insurance-selector">
        <h3 class="STSS__content__subtitle text-uppercase">assicurazione</h3>
        <span class="ST2-book__choose ST2-book__choose--ins">Per una maggiore serenità consigliamo a tutti i viaggiatori di aggiungere l’assicurazione di viaggio alla prenotazione</span>
        <div class="STSS__content__moreInfo col-xs-12">
            <a aria-controls="collapseMoreInfo" aria-expanded="false" href="#collapseMoreInfo" data-toggle="collapse" role="button" class="">+ <i>Maggiori informazioni</i></a>
            <div id="collapseMoreInfo" class="collapse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida libero at auctor consequat. Ut quis sodales nibh. Nullam fringilla non tellus a aliquam. Suspendisse rutrum ipsum eu dolor vehicula laoreet. Etiam ac interdum metus, nec varius mi. Phasellus a arcu venenatis, ullamcorper mauris in, accumsan est. Pellentesque sollicitudin vulputate congue. Morbi hendrerit lacus ante, quis efficitur dolor tristique eget. Etiam ut ligula quam.</p>
            </div>
        </div>


        <div class="col-xs-12 col-sm-6 STSS__content__protection no-p-l">
            <insurance-protection />
        </div>


    </div>
</template>
<script>
  import InsuranceProtection from './InsuranceProtection'

  export default {
    name: 'InsuranceSelector',
    components: {
      InsuranceProtection
    }
  }
</script>