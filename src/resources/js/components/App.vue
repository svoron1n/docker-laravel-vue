<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import EmptyLayout from '../layouts/EmptyLayout';
import MainLayout from '../layouts/MainLayout';

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style scoped>

</style>
