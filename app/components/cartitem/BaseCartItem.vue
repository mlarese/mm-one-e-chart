<script>
  import IconRemove from '../icons/IconRemove'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapActions} from 'vuex'
  import Select2 from 'vue-select'

  export default {
    methods: {
      ...mapActions('cart', ['removeProduct']),
      onRemoveProduct () {
        this.removeProduct({cartIndex: this.index})
      }
    },
    computed: {
      realPrice () {
        if (!this.item.finalPrice || this.item.finalPrice === '') {
          return this.item.price
        } else {
          return this.item.finalPrice
        }
      },
      options () {
        let options = []
        for (let i = 0; i < 10; i++) {
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
    components: {IconRemove, SupDecimals, Select2}
  }
</script>