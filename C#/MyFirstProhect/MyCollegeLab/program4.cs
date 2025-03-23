using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program4
    {
        //Write a program to evaluate GCD of two given integers. Use function that returns GCD.
        public program4()
        {
            Console.WriteLine("Enter first number: ");
            int firstNum = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Second number: ");
            int secondNum = Convert.ToInt32(Console.ReadLine());
            int gcd = 0;

            for(int i=1;i<=firstNum && i <= secondNum; i++)
            {
                if(firstNum%i==0 && secondNum % i == 0)
                {
                    gcd = i;
                }
            }
            Console.WriteLine("GCD Of Given Number: "+gcd);


        }
    }
}
