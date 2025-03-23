using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Excercise
    {
        public Excercise()
        {
            //Write a program that ask user to enter the number and perform the following
            //1.Check if the number is prime or not
            Console.WriteLine("Enter the Number: ");
            int number = int.Parse(Console.ReadLine());
            //int flag = 0;
            //for(int i = 2; i <= number / 2; i++)
            //{
            //    if (number % i == 0)
            //    {
            //        flag = 1;
            //        break;
            //    }
            //}
            //if(flag == 0)
            //{
            //    Console.WriteLine($"{number} is a prime ");
            //}
            //else
            //{
            //    Console.WriteLine($"{number} is not a prime");
            //}

            ////Fibonacci methods using recursion
            //int fibonacci(int num)
            //{
            //    if (num == 0)
            //    {
            //        return 0;
            //    }
            //    else if(num == 1)
            //    {
            //        return 1;
            //    }
            //    else
            //    {
            //        return fibonacci(num - 1) + fibonacci(num-2);
            //    }
            //}
            //Console.WriteLine("Fibonacci series is: ");
            //for(int i = 0; i < number; i++)
            //{
            //    Console.Write(fibonacci(i)+" ");
            //}

            //if (number < 0 || number > 100) 
            //{
            //    Console.WriteLine("Unexpected marks. Teacher ko Galti xa Pheri Check Garna Lagau");
            //    return;
            //}
            //Display the grade if (given number less than 0 and 100) using switch
            switch (number)
                {
                    case int n when n > 100:
                    case int n1 when n1 < 0:
                    Console.WriteLine("Unexpected marks. Teacher ko Galti xa Pheri Check Garna Lagau");
                    break;
                    case int n when (n >= 90 && n <= 100):
                        Console.WriteLine("A+ Grade");
                        break;
                    case int n when (n >= 80 && n <= 90):
                        Console.WriteLine("A Grade");
                        break;
                    case int n when (n >= 70 && n <= 80):
                        Console.WriteLine("B+ Grade");
                        break;
                    case int n when (n >= 60 && n <= 70):
                        Console.WriteLine("B Grade");
                        break;
                    case int n when (n >= 50 && n <= 60):
                        Console.WriteLine("C+ Grade");
                        break;
                    case int n when (n >= 40 && n <= 50):
                        Console.WriteLine("C Grade");
                        break;
                    case int n when (n >= 0 && n <= 40):
                        Console.WriteLine("Try Next Time. Failed means Double Pratice no need to worry");
                        break;
                    default:
                        Console.WriteLine("Please ,Input Number, Not String");
                        break;


                }


            }
         
        }
    }
