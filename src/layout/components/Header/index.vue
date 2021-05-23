<template>
  <el-row class="header" type="flex" align="middle" justify="center" :gutter="20">
    <el-col :lg="5" :md="6" :sm="7" class="title">
      {{ $config.title }}
    </el-col>
    <el-col :lg="14" :md="16" :sm="16" class="nav hidden-xs-only">
      <Nav :navList="navList" :activeIndex="activeIndex" />
    </el-col>
  </el-row>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Header",
  components: {
    Nav,
  },
  data() {
    return {
      navList: [
        {
          path: "/Home",
          title: "首页",
        },
        {
          path: "/TimerShaft",
          title: "时间轴",
        },
        {
          path: "/About",
          title: "关于",
        },
      ],
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: $--color-primary;
  color: $--color-primary-white;
  .nav {
    display: flex;
    justify-content: flex-end;
  }
  .title {
    font-size: 18px;
  }
}
</style>
