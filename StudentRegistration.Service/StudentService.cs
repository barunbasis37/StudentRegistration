using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentRegistration.Model;
using StudentRegistration.Repository;
using StudentRegistration.ViewModel;

namespace StudentRegistration.Service
{
    public class StudentService : BaseService
    {
        StudentRepository repository;
        public StudentService(BusinessDbContext db) : base(db)
        {
            repository = new StudentRepository(DbContext);
        }
        public List<StudentViewModel> GetAll()
        {
            
            IQueryable<Student> queryable = repository.GetAll();
            var studentViewModels = queryable.ToList().Select(x => new StudentViewModel(x)).ToList();
            return studentViewModels;
        }

        public string Save(Student student)
        {
            return repository.Save(student);
        }

        public StudentViewModel GetDetails(string id)
        {
            return repository.GetDetails(id);
        }
    }
}
