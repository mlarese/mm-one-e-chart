<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapState('comparator', ['boBestPrice', 'currency']),
      ...mapGetters('comparator', ['channels'])
    }
  }
</script>