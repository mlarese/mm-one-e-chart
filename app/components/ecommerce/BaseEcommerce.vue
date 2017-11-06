<script>
  import {mapGetters, mapActions} from 'vuex'
  import MugenScroll from 'vue-mugen-scroll'
  import _slice from 'lodash/slice'
  import _delay from 'lodash/delay'
  import Cart from '../cart/Cart'
  import Products from '../products/Products'
  import Spinner from 'vue-simple-spinner'

  export default {
    watch: {
      'products' () {
        this.reset()
        this.fetch()
      }
    },

    data () {
      return {
        loading: false,
        currentIdx: 0,
        increments: 10,
        visibleProducts: [],
      }
    },

    methods: {
      reset () {
        this.currentIdx = 0
        this.visibleProducts = []
      },
      fetch () {
        if (this.products.length <= this.visibleProducts.length){
          this.loading = false
          return
        }

        console.log("--- before", this.products.length, this.visibleProducts.length)
        this.loading = true
        const start = this.currentIdx
        this.currentIdx += this.increments
        const end = this.currentIdx

        _delay(() => {
          this.visibleProducts.push(..._slice(this.products, start, end ))
          this.loading = false
          console.log("--- after", this.products.length, this.visibleProducts.length)
        }, 200)


      }
    },
    computed: {
      ...mapGetters('products', ['products'])
    },
    components: {Cart, Products, MugenScroll, Spinner}
  }
</script>