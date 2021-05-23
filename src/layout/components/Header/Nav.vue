<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      :background-color="$config.color_primary"
      :text-color="$config.text_color"
      :active-text-color="$config.active_text_color"
      router
    >
      <el-menu-item :index="item.path" v-for="(item,index) in navList" :key="index">
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: String,
      require:true,
    },
    navList:{
      type: Array,
      require:true,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped></style>
