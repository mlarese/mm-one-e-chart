<template>
    <div class="ST2-book__slider group-bar" :class="{withSlider: hasSlider}">
        <div v-for="{id, description, name, code} in groupList" class="slider-item">
            <input
                :id="'cat_' + id"
                class="group-bar-item"
                type="radio"
                :value="id"
                name="group"
                @change="changeGroup(id)"
                v-model="current"
            />
            <label :for="'cat_' + id" v-text="formatText(name)"></label>
        </div>
        <div class="slider-item">&nbsp;</div>
    </div>

</template>

<script>
  import 'slick-carousel/slick/slick'
  import _capitalize from 'lodash/capitalize'

  let $loc
  if (window.$){
    $loc = window.$
  } else {
    $loc = require('jquery')
  }
  export default {
    computed: {
      hasSlider () {
        // return (this.groupList.length > this.slickOptions.slidesToShow)
        return true
      }
    },
    methods: {
      formatText (text) {
        return _capitalize(text)
      },

      changeGroup (newGroupId) {
        this.$emit('change-group', newGroupId)
      },
      onSelect (newGroupId) {
        this.changeGroup(newGroupId)
      }
    },
    watch: {
      groupCurrent () {
        this.current = this.groupCurrent
      }
    },
    created () {
      this.current = this.groupCurrent
    },
    mounted () {
      $loc(this.$el).slick(this.slickOptions)
      $loc(this.$el).on('setPosition', (event, slick, direction) => {})
    },
    beforeDestroy () {
      $loc(this.$el).slick('unslick')
    },
    data () {
      return {
        current: 0,
        isMounted: false,
        mobileFirst: true,
        slickOptions: {
          infinite: false,
          initialSlide: 0,
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }]
        }
      }
    },
    props: {
      groupCurrent: {default: 3},
      groupList: {
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
    .group-bar{
        .slider-item {
            margin-right: 9px;
        }
        padding: 4px;
    }
</style>
