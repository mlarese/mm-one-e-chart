<template>
    <form class="group-bar">
        <div class="ST2-book__slider">
            <template v-for="{group_id, group_name} in groupList">
                <div>
                    <input
                        :id="group_id"
                        class="group-bar-item"
                        type="radio"
                        :value="group_id"
                        name="group"
                        @change="changeGroup(group_id)"
                        v-model="current"
                    />
                    <label :for="group_id" v-text="group_name"></label>
                </div>
            </template>
        </div>
    </form>
</template>

<script>
  export default {
    methods: {
      changeGroup (e) {
        this.$emit('change-group', e)
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
          {group_id: 1, group_name: 'Group 1'},
          {group_id: 2, group_name: 'Group 2'},
          {group_id: 3, group_name: 'Group 3'},
          {group_id: 4, group_name: 'Group 4'}
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