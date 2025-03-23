using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program7
    {
        public program7()
        {
            //7. Write a C# program for matrix addition with the help of function add (int [,] a, int [,] b).
            Console.WriteLine("Enter the row size of First Matrix: ");
            int rows1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the col size of First Matrix: ");
            int col1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter the row size of First Matrix: ");
            int rows2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the col size of First Matrix: ");
            int col2 = int.Parse(Console.ReadLine());

            if(rows1 != rows2 || col1 != col2)
            {
                Console.WriteLine("Error: Matrices must have the same Dimensions for Addition");
                return;
            }

            // we use [,] to declare 2d array in c#
            int[,] matrix1 = new int[rows1,col1];
            int[,] matrix2 = new int[rows2,col2];
            int[,] resultMatrix = new int[rows1, col1];

            //read the elements in matrices

            Console.WriteLine("Enter elements for first Matrix: ");
            readMatrix(matrix1,rows1,col1);
            Console.WriteLine("Enter elements for Second Matrix: ");
            readMatrix(matrix2, rows2, col2);

            //sum of the matrices
            for(int i = 0; i < rows1; i++)
            {
                for(int j=0;j< col1; j++)
                {
                    resultMatrix[i, j] = matrix1[i, j] + matrix2[i, j];

                }
            }
            //display the matrices
            Console.WriteLine("Display the matrix 1: ");
            displayMatrix(matrix1, rows1, col1);
            Console.WriteLine("Display the matrix 2: ");
            displayMatrix(matrix2, rows2, col2);
            Console.WriteLine("Display the Result matrix: ");
            displayMatrix(resultMatrix, rows1, col1);

            void readMatrix(int[,] matrix, int rows,int cols)
            {
                for (int i = 0; i < rows; i++)
                {
                    for (int j = 0; j < cols; j++)
                    {
                        Console.WriteLine($"Element: [{i},{j}]");
                        matrix[i, j] = int.Parse(Console.ReadLine());
                    }
                }
            }
            void displayMatrix(int[,]matrix,int rows,int cols)
            {
                for (int i = 0; i < rows; i++)
                {
                    for (int j = 0; j < cols; j++)
                    {
                        Console.Write(matrix[i, j] + " ");
                    }
                    Console.WriteLine();
                }
            }
        }
    }
}
