<template>
  <div class="BackTop"></div>
</template>

<script>
export default {
  name: 'BackTop',
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
}
</style>
