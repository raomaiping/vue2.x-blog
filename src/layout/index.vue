<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import { Header, Main } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
export default {
  name: "Layout",
  mixins: [ResizeMixin],
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss" scoped></style>
