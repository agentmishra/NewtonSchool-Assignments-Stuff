import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
                      // Your code here
        
        Scanner sc= new Scanner(System.in); 
        int D= sc.nextInt(); 
        int Q= sc.nextInt(); 
        if (Q==0) {
            System.out.println(-1);
        }
        else{
            System.out.println((int)Math.floor(D/Q));
        }
	}
}
