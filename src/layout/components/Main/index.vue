<template>
  <div class="main">
    <el-row type="flex" justify="center" class="main_row" :gutter="20">
      <el-col :lg="14" :md="16" :sm="16">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" /> </transition
      ></el-col>
      <el-col :lg="5" :md="6" :sm="7" class="hidden-xs-only">
          <Author/>
      </el-col>
    </el-row>

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  name: "Main",
  components: {
    Footer,
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .main_row{
    padding-top: 10px;
  }
}
</style>
