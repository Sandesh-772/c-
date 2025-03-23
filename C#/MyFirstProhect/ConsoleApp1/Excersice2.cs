using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Excersice2
    {
        public Excersice2()
        {
            //Demonstrate the Continue and goto statement
            //Console.WriteLine("Enter the number: ");
            //int num = int.Parse(Console.ReadLine());
            //for (int i = 0; i < num; i++)
            //{
            //    if (i == 3)
            //    {
            //        continue;  //use of continue
            //    }
            //    Console.Write(i+" ");
            //}

        // let's use goto statement
        step1:
            Console.WriteLine("Enter number: ");
            int size = int.Parse(Console.ReadLine());
            int val = 0;
            for(int i = 0; i < size; i++)
            {
                val = int.Parse(Console.ReadLine());
                if(val == 5)
                {
                    goto step1;
                }
            }
        }
    }
}
