using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentRegistration.Model;
using StudentRegistration.Service;

namespace StudentRegistration.App.Controllers
{
    public class StudentController : BaseController
    {
        public IHttpActionResult Post(Student student)
        {
            StudentService service=new StudentService(Db);
            student.Id = Guid.NewGuid().ToString();
            string addedId = service.Save(student);
            return Ok(addedId);
        }
    }
}
