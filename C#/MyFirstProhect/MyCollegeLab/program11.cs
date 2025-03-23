using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program11
    {
        public program11()
        {
            //11. Write a C# program to initialize and display jagged array elements with sum of each row.
            int[][] array = new int[3][];

            //initialize the jaggedArray
            array[0]=  new int[] {3,4,1};
            array[1] = new int[] { 3, 33, 11, 2 };
            array[2] = new int[] { 22, 44, 11, 33, 11 };

            for( int i = 0; i < array.Length; i++)
            {
                int rowSum = 0;
                Console.WriteLine("Row: "+ (i+1)+ ":");
             for(int j = 0; j < array[i].Length; j++)
                {
                    Console.WriteLine(array[i][j]+" ");
                   rowSum+= array[i][j];
                }
                Console.WriteLine($"Sum of Jagged Arrays is: {rowSum}");
            }
            
        }
    }
}
