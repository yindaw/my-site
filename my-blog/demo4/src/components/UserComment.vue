<template>
  <p>
    <span style="color: red" v-if="rerender">rerender:{{ rerender }}</span>
  </p>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
  data() {
    return {
      rerender: 0,
    };
  },
  beforeUpdate() {
    this.rerender++;
  },
};
</script>

<style>
</style>