<template>
  <div class="app-container">
    <Layoyt>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layoyt>
  </div>
</template>
<script>
import Layoyt from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    Layoyt,
    SiteAside,
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>