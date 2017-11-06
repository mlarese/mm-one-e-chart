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
        visibleProducts: []
      }
    },

    methods: {
      reset () {
        this.currentIdx = 0
        this.visibleProducts = []
        this.increments = 10
      },
      fetch () {
        if (!this.hasMore) {
          return
        }

        console.log('fetching')
        this.loading = true
        const start = this.currentIdx
        this.currentIdx += this.increments
        const end = this.currentIdx

        this.visibleProducts = _slice(this.products, 0, end )
        this.loading = false
      }
    },
    computed: {
      ...mapGetters('products', ['products']),
      hasMore () {
        if(this.products.length === 0) {
          return false
        }
        return this.products.length > this.visibleProducts.length
      }
    },
    components: {Cart, Products, MugenScroll, Spinner}
  }
</script>