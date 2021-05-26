<template>
  <div>
    <ul class="pc-nav">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="[{ 'pc-active': item.name === $route.name }, 'hidden-xs-only']"
        @click="item.name !== $route.name && $router.push({ name: item.name })"
      >
        <svg-icon :icon-class="item.icon" class="nav-icon" />
        {{ item.title }}
      </li>
    </ul>
    <div class="app-nav hidden-sm-and-up" @click="appNavActive = !appNavActive">
      <svg-icon icon-class="xiasanjiao" :class="{ 'app-active': appNavActive }" />
      <ul class="app-nav-list" v-show="appNavActive">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="[
            { 'app-nav-item-active': item.name === $route.name },
            'app-nav-item',
          ]"
          @click="
            item.name !== $route.name && $router.push({ name: item.name })
          "
        >
          <svg-icon :icon-class="item.icon" class="nav-icon" />
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      appNavActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-icon {
  margin-right: 10px;
}
.pc-nav {
  display: flex;
  li {
    padding: 0 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .pc-active {
    color: $--active_color;
  }
}
.app-nav {
  .app-active {
    transform: rotate(180deg);
  }
  .app-nav-list {
    position: absolute;
    top: 70px;
    right: 20px;
    width: 150px;
    background: #fff;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    color: #303133;
    box-sizing: border-box;
    z-index: 999;
    .app-nav-item {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
    }
    .app-nav-item-active {
       color: $--active_color;
    }
  }
}
</style>
