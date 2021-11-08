<template>
  <div class="BackTop" ref="back-top" @click="handleBackTop"></div>
</template>

<script>
export default {
  name: 'BackTop',
  mounted() {
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const backTopStyle = this.$refs['back-top']?.style
      let oldScrollY = 0
      oldScrollY = window.scrollY
      let height = window.innerHeight
      let top = '-' + (900 - height + 80) + 'px'
      if (oldScrollY > 0) {
        if (backTopStyle) {
          backTopStyle.top = top
        }
      } else {
        if (backTopStyle) {
          backTopStyle.top = '-900px'
        }
      }
    },
    //回到顶部
    handleBackTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style>
.BackTop {
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background: url('~@/assets/components/scroll.png') no-repeat center;
  background-size: contain;
  transition: all 0.5s ease-in-out;
  opacity: 1;
  cursor: pointer;
}
</style>
