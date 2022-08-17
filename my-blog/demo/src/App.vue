<template>
  <div>
    <!-- <Numbers
      ref="num"
      :num1="n1"
      :num2="n2"
      @update:num1="n1 = $event"
      @update:num2="n2 = $event"
    />
    <Numbers :num1.sync="n1" :num2.sync="n2" /> -->

    <h1>App{{ number.value }} <button @click="number.value++">+</button></h1>

    <A />
  </div>
</template>

<script>
// import Numbers from "./components/Numbers.vue";
import A from "./components/A.vue";
import store from "./store";
export default {
  provide: {
    a: 1,
    b: 2,
  },

  components: {
    A,
  },
  data() {
    return {
      number: store.number,
    };
  },

  // components: {
  //   Numbers,
  // },
  // data() {
  //   return {
  //     n1: 0,
  //     n2: 3,
  //   };
  // },
  // mounted() {
  //   console.log(this.$children);
  //   console.log("ref", this.$refs.num);
  // },
};
</script>