// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-blog.com",
      },
    },
  },
  publicPath: "/news",
  // // runtimeCompiler: true,
  // // transplieDependencies: []
  // configureWebpack: {
  //   // webpack配置
  // },
  // css: {
  //   // requireModuleExtension: false,
  // }
};
