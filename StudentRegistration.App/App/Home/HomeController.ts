module App {
    export class HomeController {
        static $inject = [];

        constructor() {
            console.log("I m in Home Controller Constructor");
        }

        Time:string;
        ShowTime() {
            var time = new Date();
            this.Time = time.toDateString();
        }
    }

    angular.module("app").controller("HomeController", HomeController);
}