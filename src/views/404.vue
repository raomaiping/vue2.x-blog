<template>
  <div class="Page404">
      <Avatar
        :size="100"
        style="margin-top:100px"
        @click.native="handleAvatar"
        :class="{'rotate':isPlay}"
      />
    <div class="bounce">
      <span v-for="(item, index) in text" :key="index">{{ item }}</span>
    </div>

    <el-button  style="margin-top:100px" type="primary" @click="handleReturnHome">返回首页</el-button>
    <audio autoplay loop ref="audio">
      <source src="../assets/music.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "Page404",
  data() {
    return {
      text: "404！网页君找不到这个页面了哦...",
      isPlay:false,
    };
  },
  methods: {
    handleAvatar() {
      this.handlePaly();
    },
    handlePaly() {
      let audio = this.$refs.audio;
      if (audio.paused) {
        this.isPlay = true
        audio.play(); //播放
        return;
      }
      this.isPlay = false
      audio.pause(); // 暂停
    },
    handleReturnHome(){
      this.$router.push({name:'Home'})
    }
  },
};
</script>

<style scoped lang="scss">
.Page404 {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/404_images/bg.jpg") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bounce {
    margin-top: 100px;
    font-weight: bold;
    color: #fff;
    span {
      animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
      display: inline-block;
      transform: translate3d(0, 0, 0);
      margin-top: 0.5em;
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
      @for $i from 1 through 19 {
        &:nth-child(#{$i}) {
          animation-delay: 0.08 * $i + s;
        }
      }
    }
  }
}
.rotate{
   animation: rotation 3s linear infinite;
}
@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -1em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}


@keyframes rotation{
  from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
