module App {
    export class StudentController {
        student: Student;
        private studentService: StudentService;
        private stateParamService: angular.ui.IStateParamsService;
        static $inject =["StudentService","$stateParams"];
        constructor(studentService:StudentService,stateParams: angular.ui.IStateParamsService) {
            this.student = new Student();
            this.studentService = studentService;
            this.stateParamService = stateParams;
            if (this.stateParamService["id"] != null) {
                console.log("server call");
                var id = this.stateParamService["id"];
                this.studentService.GetDetail(id).then((success:any):void => {
                    console.log(success);
                    this.student = success.data;
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