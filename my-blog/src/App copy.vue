<template>
  <div>
    <h1>App组件</h1>
    <Pager />
    <!-- 如果分数>=80，<h1>优</h1> -->
    <!-- 如果分数>=60，<h2>良</h2> -->
    <!-- 其他，<h3>差</h3> -->
    <!-- <h1 v-if="score >= 70">优</h1>
    <h2 v-else-if="score >= 60">良</h2>
    <h3 v-else>差</h3> -->
    <p v-show="visible">something</p>
    <button @click="visible = !visible">奇幻显示</button>
  </div>
</template>

<script>
import Pager from "./components/Pager.vue";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      // score: 70,
      visible: true,
    };
  },
};
</script>
<style scoped>
</style>