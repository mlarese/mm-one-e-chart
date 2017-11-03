<script>
  import {mapGetters, mapActions, mapState} from 'vuex'
  import IconSlimTick from '../icons/IconSlimTick'
  import IconTick from '../icons/IconTick'
  import IconInfo from '../icons/IconInfo'
  import SupDecimals from '../display/SupDecimalsVx'
  import VueSelect from '../vselect/src/components/Select'

  export default {
    methods: {
      ...mapActions('cart', ['addInsurance'])
    },
    computed: {
      ...mapState('cart', ['cart']),
      ...mapGetters('cart', ['hasInsuranceProtection', 'hasInsuranceProtectionPlus', 'protectionPlusTotal', 'protectionTotal', 'insuranceType', 'hasInsurance']),
      insureOptions () {
        return [
          {value:0, label: this.$t('Account/Deposit')},
          {value:1, label: this.$t('Full stay')}
        ]
      }
    },
    data () {
      return {
        currentOption: {}
      }
    },
    created () {
      this.currentOption = this.insureOptions[0]
    },
    components: {
      IconSlimTick, IconInfo, SupDecimals, IconTick, VueSelect
    }
  }
</script>