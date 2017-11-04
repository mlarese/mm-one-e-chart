<script>
  import IconRemove from '../icons/IconRemove'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapActions, mapGetters} from 'vuex'
  import VueSelect from '../vselect/src/components/Select'

  export default {
    methods: {
      ...mapActions('cart', ['removeProduct']),
      onRemoveProduct () {
        this.removeProduct({cartUid: this.item.uid})
      }
    },
    computed: {
      ...mapGetters('cart', ['itemFinalPriceTotal', 'itemPriceFromTotal', 'itemPriceFrom']),
      ...mapGetters('app', ['cartLocked']),
      priceFrom () {
        return this.itemPriceFromTotal(this.item)
      },
      isPayLater () {
        return this.item.topayapart * 1 === 1
      },
      realPrice () {
        return this.itemFinalPriceTotal(this.item)
      },
      options () {
        let options = []
        for (let i = 1; i <= this.item.availability; i++) {
          options.push(i + '')
        }
        return options
      }
    },
    props: {
      index: {default: 0},
      item: {
        default: () => ({
          name: 'transfer to aeroporto di vce',
          priceFrom: '£1020',
          finalPrice: '£1020',
          discount: -32,
          price: '£4200',
          quantity: 1
        })
      }
    },
    components: {IconRemove, SupDecimals, VueSelect}
  }
</script>