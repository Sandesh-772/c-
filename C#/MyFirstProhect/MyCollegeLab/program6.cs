using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program6
    {
        public program6()
        {
            /*Write a C# program to store N numbers in a one-dimensional array and
             calculate its average with the help of method.
            */

            //methods to calculate average of array
            double getaverage(int[] arr)
            {
                if (arr == null || arr.Length == 0)
                {
                    throw new ArgumentException("Array is empty or null");
                }
                double sum = 0;
                double count = 0;

                for (int i = 0; i < arr.Length; i++)
                {
                    sum += arr[i];
                    count++;
                }
                return sum / count;

            }
            Console.WriteLine("Enter the Size of an Array: ");
            int size = int.Parse(Console.ReadLine());
            int[] num = new int[size];
            for(int i = 0; i <size; i++)
            {
                Console.WriteLine($"Enter the value of {i + 1}");
                num[i] = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("Arrays are: ");
            for(int i = 0; i <size; i++)
            {
                Console.WriteLine($"{num[i]}");
            }
            Console.WriteLine($"Average of One Dimensional Array: {getaverage(num)}");


        }
    }
}
