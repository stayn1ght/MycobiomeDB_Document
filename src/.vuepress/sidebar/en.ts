import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "ability",
      text: "Material and Methods",
      prefix: "methods/",
      link: "methods/",
      // children: "structure",
      children: [
        {
          text: "Data acquisition",
          link: "dataacquisition",
          icon: "flow",
        },
        {
          text: "Data Processing & QC",
          link: "dataprocessing",
          icon: "filter",
        },
        {
          text: "Identification of disease markers",
          link: "indepthanalysis",
        }
      ]
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
      icon: "guide",
      children: "structure"
    },
  ],
});
