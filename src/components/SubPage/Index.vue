<template>
  <div>
    <botton @click="goBack">返回</botton>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      history.go(-1)
    }
  }
}
</script>
