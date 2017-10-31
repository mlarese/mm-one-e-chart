<template>
    <div class="insurance-selector">
        <h3 class="STSS__content__subtitle text-uppercase">{{$t('Insurance')}}</h3>
        <span class="ST2-book__choose ST2-book__choose--ins">{{$t('Use Booking protection to insure your stay')}}</span>
        <div class="STSS__content__moreInfo col-xs-12">

            <a v-if="!moreInfoExpanded" role="button" class="" @click="toggleMoreInfoExpanded">+ <i> {{$t('More info')}} </i></a>
            <a v-if="moreInfoExpanded"  role="button" class="" @click="toggleMoreInfoExpanded">- <i> {{$t('More info')}} </i></a>

            <div v-if="moreInfoExpanded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida libero at auctor consequat. Ut quis sodales nibh. Nullam fringilla non tellus a aliquam. Suspendisse rutrum ipsum eu dolor vehicula laoreet. Etiam ac interdum metus, nec varius mi. Phasellus a arcu venenatis, ullamcorper mauris in, accumsan est. Pellentesque sollicitudin vulputate congue. Morbi hendrerit lacus ante, quis efficitur dolor tristique eget. Etiam ut ligula quam.</p>
            </div>
        </div>


        <div class="col-xs-12 col-sm-6 STSS__content__protection no-p-l">
            <insurance-protection />
        </div>
        <div class="col-xs-12 col-sm-6 STSS__content__protection no-p-l">
            <insurance-protection-full />
        </div>

    </div>
</template>
<script>
  import InsuranceProtection from './InsuranceProtection'
  import InsuranceProtectionFull from './InsuranceProtectionFull'

  export default {
    name: 'InsuranceSelector',
    methods: {
      toggleMoreInfoExpanded () {
        this.moreInfoExpanded = ! this.moreInfoExpanded
      }
    },
    data () {
      return {
        moreInfoExpanded: false
      }
    },
    components: {
      InsuranceProtection, InsuranceProtectionFull
    }
  }
</script>