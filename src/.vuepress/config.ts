import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/mycgutdb_document/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Mycgutdb Document",
      description: "A docs demo for Mycgutdb",
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
