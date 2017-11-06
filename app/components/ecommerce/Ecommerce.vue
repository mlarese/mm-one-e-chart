<template>
    <div class="ecommerce" ref="scrollContainer" >
        <div class="col-xs-12 col-sm-8 no-p-l STSS__content wrap">
            <products :products="visibleProducts" />
            <spinner size="25" v-if="hasMore"></spinner>
            <mugen-scroll
                    class="scroller" :handler="fetch" :should-handle="!loading" :handleOnMount="false">
            </mugen-scroll>
            <div class="STSS__content__bottom">
                <div class="clear-resizer"></div>
            </div>
        </div>

        <aside class="col-xs-12 col-sm-4 no-p-r STSS__roomsNew">
            <cart />
        </aside>

        <div style="clear: both"></div>


    </div>
</template>

<script>
  import BaseEcommerce from './BaseEcommerce'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Onlyecommerce',
    extends: BaseEcommerce
  }
</script>

<style lang="scss">
    .ecommerce {
        .clear-resizer {
            clear:both;
            height:150px;
        }
        .scroller {
            height:30px;
            // position: relative;
            // top:-50px;
        }

    }
</style>