<template>
    <div class="STSS__roomsNew__acc col-xs-12">
        <div>
            <a href="#" class="STSS__roomsNew__item__ssr__remove" @click="onRemove">
                 <icon-remove />
            </a>
            <div class="STSS__roomsNew__acc__price text-right">
                <b class="STSS__roomsNew__total__label">Totale assicurazione</b> <em class="STSS__roomsNew__total__price">€ 153<sup>,20</sup></em>
            </div>
            <i class="STSS__roomsNew__acc__msg">Il pagamento della polizza assicurativa avviene in modalità separata</i>
        </div>
    </div>
</template>
<script>
  import IconRemove from '../../../components/icons/IconRemove'
  export default {
    methods: {
      onRemove () {

      }
    },
    components: {
      IconRemove
    }
  }
</script>