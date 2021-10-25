<template>
  <div class="page-container">
    <div class="page-bg" :style="`background-image: url(${bg});`"></div>
    <page-nav class="page-nav"></page-nav>
    <page-header></page-header>
    <page-main></page-main>
  </div>
</template>

<script>
import { PageNav, PageHeader, PageMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  mixins: [ResizeMixin],
  components: {
    PageNav,
    PageHeader,
    PageMain,
  },
  data() {
    return {
      bg: require('@/assets/layout/bg.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  .page-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top center;
    z-index: -999;
  }
  .page-nav {
    position: absolute;
    top: 50px;
    right: 100px;
    z-index: 999;
  }
}
</style>
