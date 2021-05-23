<template>
  <el-row>
    <el-col :span="24" v-for="item in list" :key="item._id">
      <el-card class="card" shadow="hover" :body-style="{padding:'10px'}">
        <el-image
          v-if="item.img"
          :src="item.img"
          lazy
          :preview-src-list="[item.img]"
        ></el-image>
        <div class="article">
          <div class="article_top">
            <h2 class="title">{{ item.title }}</h2>
            <p>{{ item.intro }}</p>
          </div>
          <div class="article_bottom">
            <time class="time">{{ item.time }}</time>
            <el-button type="primary" class="button">查看详情</el-button>
          </div>
        </div>
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
  /deep/.el-card__body {
    display: flex;
    height: 100%;
    box-sizing: border-box;
  }
  .article {
    flex: 1;
    padding:0 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .article_top {
      p {
        margin: 10px 0;
      }
    }
    .article_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
