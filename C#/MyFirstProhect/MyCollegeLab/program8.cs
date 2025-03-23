using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program8
    {
        public program8()
        {
            //8. Write a program to arrange the numbers (in array) in ascending order using bubble sort.
            //bubble sort methods
            void sort(int[] arr)
            {
                for(int i = 0; i < arr.Length-1; i++)
                {
                    for(int j = 0; j < arr.Length - i - 1; j++)
                    {
                        if (arr[j] > arr[j + 1])
                        {
                            int temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
            }
            //take size and value from user:
            Console.WriteLine("Enter the size of an array: ");
            int size = int.Parse(Console.ReadLine());
            int[] array = new int[size];
            for(int i = 0; i < size; i++)
            {
                Console.WriteLine($"Enter value in {i + 1}");
                array[i] = int.Parse(Console.ReadLine());
            }

            //value before sorting
            Console.WriteLine("Arrays Items are: : ");
            for(int i = 0; i < size; i++)
            {
                Console.WriteLine($"{array[i]}");
            }
            //print the sorted value
            sort(array);
            Console.WriteLine("Sorted Value are: ");
            for (int i = 0; i < size; i++)
            {
                Console.WriteLine($"{array[i]}");
                
            }



        }
    }
}
