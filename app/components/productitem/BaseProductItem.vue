<script>
  import IconTick from '../icons/IconTick'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapGetters, mapActions} from 'vuex'
  import Select2 from './SelectQuantity'

  let counter = 0

  export default {
    created () {
      counter++;
      this.id = 'pr_qt_' + counter
    },
    mounted () {
      $(this.$el).ready(() => {
        $(this.elId).select2({
          theme: "bootstrap",
          minimumResultsForSearch: -1
        })
        $(this.elId).on('change', (e) => {
          this.quantity = e.target.value
        })
      })
    },
    methods: {
      ...mapActions('cart', ['addProduct']),
      onAdd () {
        this.addProduct({rowId: 0, product: this.product, quantity: this.quantity})
      },
      toggleShowDetails () {
        this.showDetails = !this.showDetails
      }
    },
    data () {
      return {
        showDetails: false,
        id:0,
        quantity: 0
      }
    },
    computed: {
      elId () {
        return '#' + this.id
      },
      ...mapGetters('cart', ['itemsByRowId', 'itemsByProductId', 'itemByRowIdProductId', 'itemIndexByRowIdProductId']),
      options () {
        let options = []
        for (let i = 0; i < 10; i++) {
          options.push(i + '')
        }
        return options
      },
      isInCart () {
        if (!this.product) {
          return false
        }
        return this.itemsByProductId(this.product.id).length > 0
      },
      shortDescription () {
        if (!this.product.shortDescription) {
          return '&nbsp;'
        }
        return this.product.shortDescription
      },
      realPrice () {
        if (!this.product.finalPrice || this.product.finalPrice === '') {
          return this.product.price
        } else {
          return this.product.finalPrice
        }
      }
    },
    props: {
      product: {default: () => ({
        id: 0,
        photo: '../images/img_service01.jpg',
        name: 'INGRESSO CENTRO TERMALE',
        description: 'cahshhsajsjjajsh shbjhsa shhsankhkuwhuyu nabshbuwq',
        detail: 'sabjbhajbhjsbjadbjabhdjhbjjhbjh',
        price: '£455',
        decimalAmount: 45,
        inventory: 3
      })}
    },
    components: {IconTick, SupDecimals, Select2}
  }
</script>