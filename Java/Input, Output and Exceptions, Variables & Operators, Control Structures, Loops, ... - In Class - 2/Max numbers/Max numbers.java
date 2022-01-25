import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
        // Your code here
		Scanner scan = new Scanner(System.in);
		int testCases = scan.nextInt();
		while(testCases > 0){
			int max1, max2, max3;
        	max3 = max1 = max2 = 0;
			int arr_size = scan.nextInt();
			for (int i = 0; i < arr_size; i++) {
                int a = scan.nextInt();
                if (a > max1) {
                    max3 = max2;
                    max2 = max1;
                    max1 = a;
                }
                else if (a > max2) {
                    max3 = max2;
                    max2 = a;
                }
                else if (a > max3)
                    max3 = a;
            }
            System.out.println(max1 + " " + max2 + " " + max3);
            testCases--;
 		}
	}
}
