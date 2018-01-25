<template>
    <div class="list-group-item">
        <div class="media-box">
            <div class="pull-left">
                        <span class="fa-stack">
                            <em :class="iconColor"></em>
                            <em :class="iconType"></em>
                        </span>
            </div>
            <div class="media-box-body clearfix">
                <small class="text-muted pull-right ml">{{duration}}</small>
                <div class="media-box-heading"><a href="#" :class="textColor">{{label}}</a>
                </div><p class="m0"><small><a href="#">{{description}}</a></small></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      iconColor: {default: 'fa fa-circle fa-stack-2x text-purple'},
      iconType: {default: 'fa fa-cloud-upload fa-stack-1x fa-inverse text-white'},
      duration: {default: '20hrs'},
      label: {default: 'NEW FILE'},
      name: {default: 'Bootstrap.xls'},
      textColor: {default: 'text-purple m0'}
    }
  }
</script>

<style>

</style>