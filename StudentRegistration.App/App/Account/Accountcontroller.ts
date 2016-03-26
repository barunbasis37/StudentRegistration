// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface IAccountcontroller {
        title: string;
        activate: () => void;
    }

    class Accountcontroller implements IAccountcontroller {
        title: string = "Accountcontroller";

        static $inject: string[] = ["$location"];

        constructor(private $location: ng.ILocationService) {
            this.activate();
        }

        activate() {

        }
    }

    angular.module("app").controller("Accountcontroller", Accountcontroller);
}