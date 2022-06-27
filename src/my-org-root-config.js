import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@my-org/about",
  app: () => System.import("@my-org/about"),
  activeWhen: ["/"]
});


registerApplication({
  name: "@my-org/home",
  app: () => System.import("@my-org/home"),
  activeWhen: ["/"]
});


start({
  urlRerouteOnly: true,
});
