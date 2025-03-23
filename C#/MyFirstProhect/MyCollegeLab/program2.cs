using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program2
    {
        public program2()
        {
            /*2. Write a program to read the mark of a subject and print the equivalent grade.*/
            Console.Write("Enter marks in Subject 1: ");
            int marks = Convert.ToInt32(Console.ReadLine());
            if (marks > 100 || marks < 0)
            {
                Console.WriteLine("Invalid Marks");
            }
            else if (marks > 90 && marks <= 100)
            {
                Console.WriteLine("You've Got A");
            }
            else if (marks > 80 && marks <= 90)
            {
                Console.WriteLine("You've Got A-");
            }
            else if (marks > 70 && marks <= 80)
            {
                Console.WriteLine("You've Got B");
            }
            else if (marks > 60 && marks <= 70)
            {
                Console.WriteLine("You've Got B-");
            }
            else if (marks > 50 && marks <= 60)
            {
                Console.WriteLine("You've Got C");
            }
            else if (marks > 40 && marks <= 50)
            {
                Console.WriteLine("You've Got C-");
            }
            else
            {
                Console.WriteLine("Better Try Next Time.");
            }
        }
    }
}
