<script>
      import IconTick from '../icons/IconTick'
      import SupDecimals from '../display/SupDecimalsVx'
      import {mapGetters, mapActions} from 'vuex'
      import VueSelect from '../vselect/src/components/Select'
      import NumberSpinner from '../numberpinner/NumberSpinner'

      let counter = 0

      export default {
        created () {
          counter++;
          this.id = 'pr_qt_' + counter
          this.quantity = '0'
        },
        mounted () {
          const q = this.getCartItemQuantity || 0
          this.quantity = q + ''
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
            for (let i = 0; i <= this.product.availability; i++) {
              options.push(i + '')
            }
            return options
          },
          hasDiscount () {
            return (this.product.discount && this.product.discount !=='' && this.product.discount * 1 > 0)
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
          isSpecialService () {
            return this.product.type === 'specialservice'
          },
          priceFrom () {
            if (!this.product.priceFrom || this.product.priceFrom === '') {
              return this.product.price
            } else {
              return this.product.priceFrom
            }
          },
          realPrice () {
            if (this.isSpecialService) {
              return this.product.priceFrom * 1
            }
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
        components: {IconTick, SupDecimals, VueSelect, NumberSpinner}
  }
</script>