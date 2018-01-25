<script>
  import IconRemove from '../icons/IconRemove'
  import SupDecimals from '../display/SupDecimalsVx'
  import {mapActions, mapGetters} from 'vuex'
  import VueSelect from '../vselect/src/components/Select'

  export default {
    watch: {
      'item.quantity' () {
        this.cloneToRemote()
      }
    },
    methods: {
      ...mapActions('cart', ['removeProduct', 'cloneToRemote']),
      onRemoveProduct () {
        this.removeProduct({cartUid: this.item.uid})
      }
    },
    computed: {
      ...mapGetters('cart', ['itemFinalPriceTotal', 'itemPriceFromTotal', 'itemPriceFrom', 'payLaterItemRoom', 'roomIndexFromItem']),
      ...mapGetters('app', ['cartLocked', 'isToPayApart']),
      priceFrom () {
        return this.itemPriceFromTotal(this.item)
      },
      itemRoom () {
        const room = this.payLaterItemRoom(this.item)
        if (!room) {
          return null
        }
        return room
      },
      roomNumber() {
        if (!this.hasRoom) {
          return 0
        }

        return this.roomIndexFromItem(this.item) + 1
      },
      hasRoom () {
        return this.itemRoom !== null
      },
      isPayLater () {
        return this.isToPayApart(this.item)
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