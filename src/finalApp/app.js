import angular from "angular";
import angularMaterial from "angular-material";

import "../style/app.css";
import HeaderDirectiveModule from './directives/header/header.dir';

let app = () => {
  return {
    template: require("./app.html"),
    controller: "AppCtrl",
    controllerAs: "app"
  };
};

class AppCtrl {
  constructor() {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, [
      "ngMaterial",
      HeaderDirectiveModule
    ])
  .config(function($mdThemingProvider,$mdIconProvider) {
    $mdThemingProvider.theme("altTheme").primaryPalette("purple");
    $mdIconProvider
      .defaultIconSet('core-icons.svg', 24);
  })
  .directive("app", app)
  .controller("AppCtrl", AppCtrl);

export default MODULE_NAME;
