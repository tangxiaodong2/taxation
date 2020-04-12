<template>
  <div>
    第二级页面
    {{this.$route.params.id}}{{this.id}}
  </div>
</template>

<script>
export default {
  props: ['id']

}
</script>
