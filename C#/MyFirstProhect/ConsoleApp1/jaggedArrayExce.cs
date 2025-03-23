using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class jaggedArrayExce
    {
        public jaggedArrayExce()
        {
            String[][] std = new string[4][];
            for (int i = 0; i < std.Length; i++)
            {
                Console.WriteLine($"Total number of student in class {i + 1} ");
                int s = Convert.ToInt32(Console.ReadLine());
                std[i] = new string[s];
                for(int j = 0; j < std[i].Length; j++)
                {
                    Console.WriteLine($"Enter the name{j + 1}");
                    std[i][j] = Console.ReadLine();

                }
            }
            for(int i = 0; i < std.Length; i++)
            {
                for (int j = 0; j < std[i].Length; j++)
                {
                    Console.WriteLine(std[i][j]);
                }
            }
        }
    }
}
