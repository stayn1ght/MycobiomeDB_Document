import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "ability",
      text: "Material and Methods",
      prefix: "methods/",
      link: "methods/",
      children: "structure",
    },
    {
      text: "Web Interface",
      prefix: "webinterface/",
      link: "webinterface/websiteoverview",
      icon: "discover",
      children: "structure"
    },
    {
      text: "Usage",
      prefix: "usage/",
      icon: "note",
      children: "structure"
    },
  ],
});
