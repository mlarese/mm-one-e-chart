<script>
  import IconTick from '../icons/IconTick'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapGetters, mapActions} from 'vuex'
  import Select2 from 'select2'
  import VueSelect from 'vue-select'
  import NumberInputSpinner from 'vue-number-input-spinner'

  let counter = 0

  export default {
    created () {
      counter++;
      this.id = 'pr_qt_' + counter
    },
    mounted () {
      this.quantity = this.getCartItemQuantity || 0
    },
    methods: {
      ...mapActions('cart', ['addProduct']),
      onAdd () {
        this.addProduct({product: this.product, quantity: this.quantity})
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
    watch: {
      'getCartItemQuantity' () {
        // this.quantity = this.getCartItemQuantity
      }
    },
    computed: {
      canAdd () {
        return this.quantity > 0
      },
      selectQuantityDisabled () {
        return this.getCartItemQuantity > 0
      },
      getCartItem () {
        return this.inCartProduct(this.product)
      },
      getCartItemQuantity () {
        return this.inCartQuantity(this.product) * 1 || 0
      },
      elId () {
        return '#' + this.id
      },
      ...mapGetters('app', ['inCartProduct', 'inCartQuantity']),
      ...mapGetters('cart', ['itemsByRowId', 'itemsByProductId', 'itemByRowIdProductId', 'itemIndexByRowIdProductId']),
      optionsQta () {
        let options = []
        for (let i = 0; i <= this.product.order; i++) {
          options.push(i + '')
        }
        return options
      },
      isInCart () {
        if (!this.product) {
          return false
        }
        return this.getCartItemQuantity > 0
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
    components: {IconTick, SupDecimals, Select2, VueSelect, NumberInputSpinner}
  }
</script>