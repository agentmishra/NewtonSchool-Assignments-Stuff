import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
                      // Your code here

                int a;
                long b;
                float c;
                double d;
                char e;

                Scanner obj = new Scanner(System.in);
                

                a = obj.nextInt(); 
                b = obj.nextLong(); 
                c = obj.nextFloat(); 
                d = obj.nextDouble(); 
                e = obj.next().charAt(0);

                System.out.println(a);
                System.out.println(b);
                System.out.println(c);
                System.out.println(d);
                System.out.println(e);


	}
}
