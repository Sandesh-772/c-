using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    internal class program10
    {
        public program10()
        {

            string message = null;
            string result = message ?? "My Message";
            Console.WriteLine(result);

            int[] numbers = null;
            Console.WriteLine(numbers?.Length ?? 0);
        }
    }

}
}}
