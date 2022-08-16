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
    <ToTop />

    <!-- <AsyncComponent /> -->
  </div>
</template>
<script>
// const AsyncComponent = () => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const MyComp = await import("./App.vue");
//       resolve(MyComp);
//     }, 3000);
//   });
// };

import Layoyt from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layoyt,
    SiteAside,
    ToTop,
    // AsyncComponent,
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