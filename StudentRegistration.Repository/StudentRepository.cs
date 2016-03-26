using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public bool Exists(string id)
        {
            return Db.Students.Any(x=>x.Id==id);
        }
        public string Update(Student student)
        {
            Db.Entry(student).State=EntityState.Modified;
            Db.SaveChanges();
            return student.Id;
        }
        public StudentViewModel GetDetails(string id)
        {
            Student student= Db.Students.Find(id);
            StudentViewModel viewModel=new StudentViewModel(student);
            return viewModel;
        }
    }
}
