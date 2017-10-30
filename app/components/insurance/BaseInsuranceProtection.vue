<script>
  import {mapGetters, mapActions} from 'vuex'
  import IconSlimTick from '../icons/IconSlimTick'
  import IconTick from '../icons/IconTick'
  import IconInfo from '../icons/IconInfo'
  import SupDecimals from '../display/SupDecimalsVx'

  export default {
    methods: {
      ...mapActions('cart', ['addInsurance'])
    },
    computed: {
      ...mapGetters('cart', ['hasInsuranceProtection', 'hasInsuranceProtectionPlus', 'protectionPlusTotal', 'protectionTotal', 'insuranceType', 'hasInsurance'])
    },
    components: {
      IconSlimTick, IconInfo, SupDecimals, IconTick
    }
  }
</script>