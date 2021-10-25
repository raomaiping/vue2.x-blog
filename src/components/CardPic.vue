<template>
  <div class="card-pic">
    <div class="card-top">
      <div class="card-img" :style="bgPic"></div>
      <div class="card-title-content">
        <div class="card-title">{{ data.title }}</div>
        <div class="card-date">发布日期：{{ data.date }}</div>
        <div class="card-view">总浏览量: {{ data.view }}</div>
      </div>
      <div class="card-bg-wrapper">
        <div class="card-bg" :style="bgPic"></div>
      </div>
    </div>
    <div class="card-content text-ellipsis-3">{{ data.content }}</div>
    <div class="card-bottom">
      <div class="card-btn">READ MORE</div>
      <div class="card-time">{{ data.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPic',
  props: {
    data: {
      type: Object,
      default: () => ({
        title: '我才不会写年终总结之瞎说篇',
        date: '2017-12-30',
        view: 1235,
        src: require('@/assets/cardPic.jpg'),
        content: `确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自
        己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了
        确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自所以正经八儿的事情略了
        己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了
        ，瞎说一下。 年初的人事调动是个人最不能接受的事情，但不接受所以正经八儿的事情略了
        ，瞎说一下。 年初的人事调动是个人最不能接受的事情，但不接受也得接受，老板一句“这是命令...`,
        time: '31 Comments',
      }),
    },
  },
  computed: {
    bgPic() {
      return `background-image: url(${this.data.src});`
    },
  },
}
</script>

<style lang="scss">
.card-pic {
  width: 800px;
  height: 400px;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08),
    0 0 0 1px rgba(26, 53, 71, 0.04), 0 1px 1px rgba(26, 53, 71, 0.06);
  .card-top {
    position: relative;
    width: 100%;
    height: 200px;
    .card-img {
      position: absolute;
      width: 130px;
      height: 190px;
      top: -20px;
      left: 25px;
      border-radius: 4px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-size: cover;
      background-position: top center;
      z-index: 10;
    }
    .card-title-content {
      position: absolute;
      left: 200px;
      top: 50px;
      height: 84px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

      .card-title {
        font-weight: 700;
        font-size: 20px;
      }
      .card-date {
        font-size: 18px;
      }
      .card-view {
        font-size: 18px;
      }
    }
    .card-bg-wrapper {
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 6px 6px 0 0;
      z-index: 0;
      .card-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-size: cover;
        border-radius: 6px;
        filter: blur(5px);
        transform: scale(1.2);
        object-fit: cover;
        pointer-events: none;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          top: 0;
          left: 0;
          background: linear-gradient(
            to bottom,
            rgba(105, 105, 105, 0.1) 0%,
            #fff 85%
          );
        }
      }
    }
  }
  .card-content {
    margin: 20px;
    line-height: 1.75;
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    .card-btn {
      font-size: 0.8em;
      font-weight: 700;
      padding: 12px 25px;
      text-transform: uppercase;
      color: white !important;
      border-radius: 30px;
      border: none;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      display: inline-block;
      background-color: #bebbaa;
      cursor: pointer;
    }
    .card-time {
      cursor: pointer;
    }
  }
}
</style>
