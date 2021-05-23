<template>
  <el-card>
    <div class="authorInfo">
      <Avatar :size="100" />
      <div class="author margin">
        {{ $config.authorInfo.name }}
      </div>
      <div class="margin">{{ $config.authorInfo.nativePlace }}</div>
      <div class="margin">{{ $config.authorInfo.school }}</div>
      <div class="margin">{{ $config.authorInfo.email }}</div>
      <el-divider>社交账号</el-divider>
      <div class="socialMediaAccount margin">
        <svg-icon icon-class="githb" />
        <svg-icon icon-class="qq" />
        <svg-icon icon-class="wx" />
        <svg-icon icon-class="juejin" />
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "authorInfo",
};
</script>

<style lang="scss" scoped>
.authorInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .margin {
    margin: 10px 0;
  }
  .socialMediaAccount {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 26px;
  }
  .el-divider__text{
    font-size: 12px;
  }
}
</style>
