<template>
  <header class="header">
    <div class="branding">
      <figure>
        <img class="avatar" :src="avatar" />
      </figure>
      <h3 class="blog-description">
        <p>前端小菜鸟吖</p>
      </h3>
    </div>
    <div class="animation-header">
      <!-- <div class="decor-wrapper">
        <svg
          id="header-decor"
          class="decor bottom"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            class="large"
            d="M0 0 L50 50 L0 100"
            fill="rgba(255,255,255, .1)"
          ></path>
          <path
            class="large"
            d="M100 0 L50 50 L100 100"
            fill="rgba(255,255,255, .1)"
          ></path>
          <path
            class="medium"
            d="M0 100 L50 50 L0 33.3"
            fill="rgba(255,255,255, .3)"
          ></path>
          <path
            class="medium"
            d="M100 100 L50 50 L100 33.3"
            fill="rgba(255,255,255, .3)"
          ></path>
          <path
            class="small"
            d="M0 100 L50 50 L0 66.6"
            fill="rgba(255,255,255, .5)"
          ></path>
          <path
            class="small"
            d="M100 100 L50 50 L100 66.6"
            fill="rgba(255,255,255, .5)"
          ></path>
          <path
            d="M0 99.9 L50 49.9 L100 99.9 L0 99.9"
            fill="rgba(255,255,255, 1)"
          ></path>
          <path
            d="M48 52 L50 49 L52 52 L48 52"
            fill="rgba(255,255,255, 1)"
          ></path>
        </svg>
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      avatar: require('@/assets/layout/avatar.jpg'),
    }
  },
}
</script>

<style lang="scss">
.header {
  position: relative;
  z-index: 2;
  display: block;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 400px;
  .branding {
    padding-top: 110px;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .decor-wrapper {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    .decor {
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 100%;
      z-index: 2;
      .large,
      .medium,
      .small {
        animation-name: myfirst;
        animation-fill-mode: forwards;
      }
      .large {
        animation-duration: 1s;
      }
      .medium {
        animation-duration: 0.5s;
      }
      .small {
        animation-duration: 0.3s;
      }
    }
  }
}

@keyframes myfirst {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
