<template>
  <el-row>
    <el-col :span="24" v-for="item in list" :key="item._id">
      <el-card class="card" shadow="hover" :body-style="{ padding: '20px' }">
        <h2 class="title">
          {{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.time }}
        </h2>
        <el-row type="flex" class="article">
          <el-col :span="18" >
            <p>{{ item.intro }}</p>
          </el-col>
          <el-col class="image" :span="6">
            <el-image
              v-if="item.img"
              :src="item.img"
              lazy
              :preview-src-list="[item.img]"
              fit="fill"
            ></el-image>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  height: 200px;
  h2 {
    margin-bottom: 10px;
  }
  /deep/.el-card__body {
    height: 100%;
  }
  .article {
    height: 126px;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
