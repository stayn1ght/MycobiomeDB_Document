import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Material and Methods",
      prefix: "methods/",
      link: "methods/",
      icon: "discover",
      children: "structure",
    },
    {
      text: "Web Interface",
      prefix: "webinterface/",
      link: "webinterface/websiteoverview",
      icon: "app",
      children: "structure"
    },
    {
      text: "Usage",
      prefix: "usage",
      link: "usage/databaseoverview",
      icon: "guide",
      children: "structure"
    },
  ],
});
