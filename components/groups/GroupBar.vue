<template>
    <form class="group-bar">
        <div class="ST2-book__slider">
            <template v-for="{id, description, code} in groupList">
                <div>
                    <input
                        :id="id"
                        class="group-bar-item"
                        type="radio"
                        :value="id"
                        name="group"
                        @change="changeGroup(id)"
                        v-model="current"
                    />
                    <label :for="id" v-text="description"></label>

                </div>

            </template>
        </div>
    </form>
</template>

<script>
  export default {
    methods: {
      changeGroup (newGroupId) {
        this.$emit('change-group', newGroupId)
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
    data () {
      return {current: 0}
    },
    props: {
      groupCurrent: {default: 3},
      groupList: {
        default: () => ([
          {id: 1, description: 'Group 1'},
          {id: 2, description: 'Group 2'},
          {id: 3, description: 'Group 3'},
          {id: 4, description: 'Group 4'}
        ])
      }
    }
  }
</script>

<style lang="scss">
    .group-bar{
        padding: 4px;
        input {
            margin-left:18px;
            margin-right:4px;
        }
    }
</style>