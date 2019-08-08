import angular from "angular";
import './header.css';

const MODULE_NAME = "HeaderDirectiveModule";

angular.module(MODULE_NAME, [])
    .directive("header", () => {
        return {
            template: require("./header.html"),
            controller: "HeaderCtrl",
            controllerAs: "header"
          };
    });

export default MODULE_NAME;