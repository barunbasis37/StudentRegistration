module App {
    export class StudentQueryController {
        Students: Student[];
        private studentService: StudentService;
        static $inject =["StudentService"];
        constructor(studentService:StudentService) {
            this.Students = [];
            this.studentService = studentService;
            this.Get();
        }
    Get() {
        
        var self = this;
        var successCallBack= result=> {
            self.Students = result.data as Student[];
        }
        var errorCallBack = error=> {
            console.log(error);
        }
        self.studentService.Get().then(successCallBack, errorCallBack);

    }

    }

    angular.module('app').controller('StudentQueryController', StudentQueryController);
}