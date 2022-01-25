import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
        // Your code here
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int e = scan.nextInt();
		int x = scan.nextInt();
		int y = scan.nextInt();
		int k = scan.nextInt();
		int u=n,d=1,l=1,r=e;
		for(int i=0;i<k;i++)
		{
			int a,b;
			a = scan.nextInt();
			b = scan.nextInt();
			if(a==x)
			{
				if(b<y)
					d=b+1;
				else
					u=b-1;
			}
			else if(b==y)
			{
				if(a<x)
					l=a+1;
				else
					r=a-1;
			}
		}
		System.out.println(r-l+u-d);
	}
}
