using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program1
    {
        public program1()
        {

            /* 1. Write a program to convert centigrade to Fahrenheit. 
             [F = 9/5 * C + 32] (Do not change the expression */

            Console.Write("Input the Centigrade Value: ");
            double centigrade = Convert.ToDouble(Console.ReadLine());

            //now apply the given formula
            double fahrenheit = (9.0 / 5 * centigrade + 32);

            Console.WriteLine($"Celcius of {centigrade} to fahrenheit is: {fahrenheit}");

        }
    }
}
