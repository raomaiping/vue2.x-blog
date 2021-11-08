<template>
  <div class="nav-list">
    目录
    <div
      v-for="(anchor, index) in titles"
      :key="index"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="$emit('handleAnchorClick', anchor)"
    >
      <a :class="{ active: active === index }">{{ anchor.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-list {
  position: sticky;
  top: 20px;
  right: 0;
  width: 100%;
  a {
    cursor: pointer;
    transition: all 0.2s;
  }
  .active {
    color: red;
  }
}
</style>
