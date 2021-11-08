<template>
  <div class="page-container">
    <div class="page-bg" :style="`background-image: url(${bg});`"></div>
    <page-nav class="page-nav"></page-nav>
    <page-header></page-header>
    <div class="page-main">
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { PageNav, PageHeader, PageFooter } from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  mixins: [ResizeMixin],
  components: {
    PageNav,
    PageHeader,
    PageFooter,
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
  .page-main {
    background: #fff;
    position: relative;
    padding: 60px 0 20px;
    border-top: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
