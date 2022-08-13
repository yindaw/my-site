var routeTitle = "", siteTitle = "";
function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = "loading...";
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle;
  }
  else if (!routeTitle && siteTitle) {
    document.title = siteTitle;
  }
  else {
    document.title = `${routeTitle}-${siteTitle}`;
  }
}
// 网站标题控制
export default {
  setRouteTitle(title) {
    // 设置路由标题
    routeTitle = title;
    setTitle();
  },
  setSiteTitle(title) {
    // 设置网站标题
    siteTitle = title;
    setTitle();
  }
}