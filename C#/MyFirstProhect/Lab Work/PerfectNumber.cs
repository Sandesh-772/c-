using System;

namespace MyCollegeLab
{
    class Program3
    {
        public Program3()
        {
            Console.Write("Enter a number: ");
            int number = Convert.ToInt32(Console.ReadLine());
            int sum = 0;

            for (int i = 1; i <= number / 2; i++)  // Iterate up to number/2
            {
                if (number % i == 0)  // Check if 'i' is a divisor
                {
                    sum += i;  // Add divisor to sum
                }
            }

            if (sum == number)  // Check if sum of divisors equals the number
            {
                Console.WriteLine(number + " is a Perfect number.");
            }
            else
            {
                Console.WriteLine(number + " is not a Perfect number.");
            }
        }
    }

    class Program
    {
        static void Main()
        {
            new Program3();
        }
    }
}
