using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRegistration.Model
{
    

    public class Student : Base
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        //[StringLength(11, MinimumLength = 11, ErrorMessage = "Use 11 characters")]
        public string Phone { get; set; }
        [Required]
        [DataType(DataType.EmailAddress, ErrorMessage = "Email address is not valid")]
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        
    }
}
