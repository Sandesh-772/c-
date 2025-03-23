using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollegeLab
{
    class program9
    {
        public program9()
        {
            //Example of ref
            void getMul(ref int p)
            {
                p = p *2;
                Console.WriteLine(p);
            }
            //Example of out
            void getValue(out int a,out int b)
            {
                a = 5;
                b = 10;
            }
            int c1, c2;
            getValue(out c1, out c2);
            Console.WriteLine($"c1:{c1},c2:{c2}");
            int x = 7;
            getMul(ref x);
            Console.WriteLine(x);
        }
    }
}
