module App {
    export class AppConfig {

        private stateProvider: angular.ui.IStateProvider;
        private urlProvider: angular.ui.IUrlRouterProvider;
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            $stateProvider
                .state("root", {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class=\"container-fluid slide\"></div>",
                })
                .state("root.home", {
                    url: "/",
                    templateUrl: "partials/home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs:"vm"
                })
                .state("root.signin", {
                    url: "/signin",
                    templateUrl: "partials/account/signin.tpl.html"
                })
                .state("root.student-Registration", {
                    url: "/student-Registration",
                    templateUrl: "partials/Student/student-registration.tpl.html",
                    controller: "StudentController",
                    controllerAs:"vm"
                })
                .state("root.student-Edit", {
                    url: "/student-edit/:id",
                    templateUrl: "partials/Student/student-registration.tpl.html",
                    controller: "StudentController",
                    controllerAs: "vm"
                })
                .state("root.student-list", {
                    url: "/student-list",
                    templateUrl: "partials/Student/student-list.tpl.html",
                    controller: "StudentQueryController",
                    controllerAs: "vm"
                })
                ;
        }

    
    }

    angular.module("app", ["ui.router", "ngResource"]);
    angular.module("app").config(AppConfig);
}