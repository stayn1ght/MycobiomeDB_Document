import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MycobiomeDB_Document/",
  // 如果要使用github pages，base 的名字要和github repo的名字一样
  head: [["link", { rel: "icon", href: "favicon.ico" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "MycobiomeDB Document",
      description: "A docs demo for MycobiomeDB",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
