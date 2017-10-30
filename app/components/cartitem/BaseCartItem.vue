<script>
  import IconRemove from '../icons/IconRemove'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapActions} from 'vuex'
  import Select2 from 'vue-select'

  export default {
    methods: {
      ...mapActions('cart', ['removeProduct']),
      onRemoveProduct () {
        this.removeProduct({cartUid: this.item.uid})
      }
    },
    computed: {
      priceFrom () {
        if (!this.item.priceFrom || this.item.priceFrom === '') {
          return this.item.price * 1 * this.item.quantity
        } else {
          return this.item.priceFrom * 1 * this.item.quantity
        }
      },
      realPrice () {
        if (!this.item.finalPrice || this.item.finalPrice === '') {
          return this.item.price * 1 * this.item.quantity
        } else {
          return this.item.finalPrice * 1 * this.item.quantity
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