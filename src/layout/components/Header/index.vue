<template>
  <el-row
    class="header"
    type="flex"
    align="middle"
    justify="center"
    :gutter="20"
  >
    <el-col :xs="2" class="hidden-sm-and-up" @click.native="handleMenu">
      <svg-icon icon-class="menu"
    /></el-col>
    <el-col :xs="15" class="title hidden-sm-and-up" style="text-align:center">
      {{ $config.title }}
    </el-col>
    <el-col :lg="5" :md="6" :sm="7" class="title hidden-sm-and-down">
      {{ $config.title }}
    </el-col>
    <el-col :lg="14" :md="16" :sm="16" :xs="2" class="nav">
      <Nav :navList="navList"/>
    </el-col>

    <el-drawer
      :visible.sync="drawer"
      direction="ltr"
      :size="'70%'"
      withHeader
    >
      <span>我来啦!</span>
    </el-drawer>
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
          name: "Home",
          title: "首页",
          icon:"home"
        },
        {
          name: "TimerShaft",
          title: "时间轴",
          icon:"timerShaft"
        },
        {
          name: "About",
          title: "关于",
          icon:"about"
        },
      ],
      drawer:false
    };
  },
  methods:{
    handleMenu(){
      this.drawer = true;
      console.log(111);
    }
  }
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
