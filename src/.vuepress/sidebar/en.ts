import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Usage",
      prefix: "usage/",
      icon: "config",
      children: [
        "figures",
        "databaseoverview",
      ]
    },
    {
      text: "Material and Methods",
      icon: "ability",
      prefix: "methods/",
      children: [
        "figures",
        "dataacquisition",
        "dataprocessing",
        "indepthanalysis",
      ]
    },
  ],
});
