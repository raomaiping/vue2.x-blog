<template>
  <footer class="footer">
    <!-- <div class="decor-wrapper">
      <svg
        id="footer-decor"
        class="decor top"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          class="large left"
          d="M0 0 L50 50 L0 100"
          fill="rgba(255,255,255, .1)"
        ></path>
        <path
          class="large right"
          d="M100 0 L50 50 L100 100"
          fill="rgba(255,255,255, .1)"
        ></path>
        <path
          class="medium left"
          d="M0 0 L50 50 L0 66.6"
          fill="rgba(255,255,255, .3)"
        ></path>
        <path
          class="medium right"
          d="M100 0 L50 50 L100 66.6"
          fill="rgba(255,255,255, .3)"
        ></path>
        <path
          class="small left"
          d="M0 0 L50 50 L0 33.3"
          fill="rgba(255,255,255, .5)"
        ></path>
        <path
          class="small right"
          d="M100 0 L50 50 L100 33.3"
          fill="rgba(255,255,255, .5)"
        ></path>
        <path d="M0 0 L50 50 L100 0 L0 0" fill="rgba(255,255,255, 1)"></path>
        <path
          d="M48 48 L50 51 L52 48 L48 48"
          fill="rgba(255,255,255, 1)"
        ></path>
      </svg>
    </div> -->
    <div class="copyright">
      Copyright © 2021 前端小菜鸟吖 |
      <a href="https://beian.miit.gov.cn/">赣ICP备20000913号-2</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 120px 0 60px;
  position: relative;
  width: 100%;
  display: block;
  z-index: 2;
  color: #fff;
  .decor-wrapper {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    .decor {
      position: absolute;
      left: 0;
      top: -1px;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
  .copyright {
    text-align: center;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
