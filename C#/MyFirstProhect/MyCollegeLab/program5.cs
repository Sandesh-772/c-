using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program5
    {
        public program5()
        {
            //5. Write a recursive program to find the sum of n natural numbers
            int recursion(int num)
            {
                if(num == 0)
                {
                    return 0;
                }
                else
                {
                    return num + recursion(num - 1);
                }
            }
            Console.WriteLine("Enter the Number to Take Sum of Natural Number: ");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Sum: " + recursion(num1));
        }
    }
}
    