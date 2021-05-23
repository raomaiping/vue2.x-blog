<template>
  <el-avatar :size="size" :class="[{ isRotate }, 'avatar']">
    <img :src="src ? src : $config.authorInfo.avatar" />
  </el-avatar>
</template>

<script>
export default {
  props: {
    //头像地址
    src: {
      type: String,
      default:'',
    },
    //头像大小
    size: {
      type: Number,
      default: 50,
    },
    //hover是否旋转
    isRotate:{
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
.avatar {
  border: 5px solid #000;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 30%);
  cursor: pointer;
}
.isRotate{
  transition: 1s all;
}
.isRotate:hover {
  transform: rotate(360deg);
  box-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
}
</style>
