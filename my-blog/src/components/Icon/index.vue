<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-xianshi_jinggaotianchong",
  info: "icon-aboutus",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-qq",
  arrowUp: "icon-iconfonticonfonti2copy",
  arrowDown: "icon-iconfonticonfonti2",
  empty: "icon-empty",
  chat: "icon-liuyan",
};

export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "../../assets/fonts/iconfont.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>