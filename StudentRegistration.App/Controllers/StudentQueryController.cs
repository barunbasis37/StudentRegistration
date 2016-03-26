using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentRegistration.Model;
using StudentRegistration.Service;
using StudentRegistration.ViewModel;

namespace StudentRegistration.App.Controllers
{
    public class StudentQueryController : ApiController
    {
        private StudentService service;

        public StudentQueryController()
        {
            service = new StudentService(new BusinessDbContext());
        }
        public IHttpActionResult Get()
        {
            
            List<StudentViewModel> students = service.GetAll();
            return Ok(students);
        }

        public IHttpActionResult Get(string id)
        {
            StudentViewModel viewModel=service.GetDetails(id);
            return Ok(viewModel);
        }
    }
}
