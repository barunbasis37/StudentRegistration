module App {
    export class StudentController {
        student: Student;
        private studentService: StudentService;
        private stateService: angular.ui.IStateParamsService;
        static $inject =["StudentService",];
        constructor(studentService:StudentService,stateParamsService: angular.ui.IStateParamsService) {
            this.student = new Student();
            this.studentService = studentService;
            this.stateService = stateParamsService;
            if (this.stateService["id"] != null) {
                console.log("server call");
                var id = this.stateService["id"];
                this.studentService.GetDetail(id).then(success => {
                    console.log(success);
                }, error => {
                    console.log(error);
                });

            }
        }
    Save() {
        console.log(this.student);
        var self = this;
        var successCallBack=result=> {
            console.log(result);
        }
        var errorCallBack = error=>{
            console.log(error);
        }
        self.studentService.Save(self.student).then(successCallBack, errorCallBack);

    }

    }

    angular.module('app').controller('StudentController', StudentController);
}