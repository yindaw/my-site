<template>
  <Layout>
    <template v-slot:default>中间主区域</template>
    <template v-slot:header>页头</template>
    <template v-slot:footer>页脚</template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style>
</style>