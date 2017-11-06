<template>
    <div class="ecommerce" >
        <div class="col-xs-12 col-sm-8 no-p-l STSS__content">
            <products :products="visibleProducts" />
            <mugen-scroll class="scroller" :threshold="1" :handler="fetch" :should-handle="!loading" :handleOnMount="false">
                <spinner size="15" v-if="loading"/>
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

<style lang="css">
    .ecommerce{
        .clear-resizer{
            clear:both;
            height:150px;
        }
        .scroller{

        }
    }
</style>