import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Materials and Methods",
    icon: "discover",
    prefix: "/methods/",
    link: "/methods/",
  },
  {
    text: "Web Interface",
    icon: "app",
    prefix: "/webinterface/",
    link: "/webinterface/websiteoverview",

  },
  /* {
    text: "Database Usage",
    icon: "guide",
    prefix: "/usage/",
    link: "/usage/databaseoverview",
  }, */
]);
