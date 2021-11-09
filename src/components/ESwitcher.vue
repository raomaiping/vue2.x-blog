<template>
  <div :class="['e-switcher', mode]" @click="handleClick"></div>
</template>

<script>
export default {
  name: 'ESwitcher',
  data() {
    return {
      mode: 'light',
    }
  },
  created() {
    this.initTheme()
  },
  methods: {
    initTheme() {
      const theme = localStorage.getItem('theme') || 'light'
      this.mode = theme
      document.documentElement.className = theme
    },
    handleClick() {
      this.mode = this.mode === 'light' ? 'dark' : 'light'
      document.documentElement.className = this.mode
      localStorage.setItem('theme', this.mode)
    },
  },
}
</script>

<style lang="scss" scoped>
.e-switcher {
  width: 25px;
  height: 25px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  // background: red;
  &.light {
    background-image: url('~@/assets/components/sun.svg');
  }
  &.dark {
    background-image: url('~@/assets/components/moon.svg');
  }
}
</style>
