using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentRegistration.Model;
using StudentRegistration.ViewModel;

namespace StudentRegistration.Repository
{
    public class StudentRepository : BaseRepository
    {
        public StudentRepository(BusinessDbContext db) : base(db)
        {
        }

        public IQueryable<Student> GetAll()
        {
            return Db.Students.AsQueryable();
        }

        public string Save(Student student)
        {
            Student added = Db.Students.Add(student);
            Db.SaveChanges();
            return added.Id;
        }

        public StudentViewModel GetDetails(string id)
        {
            Student student= Db.Students.Find(id);
            StudentViewModel viewModel=new StudentViewModel(student);
            return viewModel;
        }
    }
}
