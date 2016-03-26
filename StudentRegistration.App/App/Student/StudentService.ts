// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class StudentService {

        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        static $inject: string[] = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        Save(data: Student): angular.IPromise<any> {
            var self = this;
            var deffered = this.qService.defer();
            var successCallBack = function(result) {
                console.log(result);
                deffered.resolve(result);
            }
            var errorCallBack = function(error) {
                console.log(error);
                deffered.reject(error);
            }
            self.httpService.post("api/Student", data).then(successCallBack, errorCallBack);
            return deffered.promise;
        }

        Get() {
            var self = this;
            var deffered = this.qService.defer();
            var successCallBack = result => {
                console.log(result);
                deffered.resolve(result);
            }
            var errorCallBack = error => {
                console.log(error);
                deffered.reject(error);
            }
            self.httpService.get("/api/StudentQuery").then(successCallBack, errorCallBack);
            return deffered.promise;
        }

        GetDetail(id) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallBack = result => {
                console.log(result);
                deffered.resolve(result);
            }
            var errorCallBack = error => {
                console.log(error);
                deffered.reject(error);
            }
            self.httpService.get("/api/StudentQuery?id=" + id).then(successCallBack, errorCallBack);
            return deffered.promise;
        }
    }

    angular.module('app').service('StudentService', StudentService);
}