import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
        // Your code here
        Scanner scan = new Scanner(System.in);
        int maxDiff = -1;
        int n = scan.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
          arr[i] = scan.nextInt();
        }
        int []rightMax = new int[n];
        rightMax[n-1]= arr[n-1];
        for(int i = n-2; i>=0; i--)
          rightMax[i] = Math.max(rightMax[i+1] , arr[i]);
    
        int maxDist = Integer.MIN_VALUE;
        int i = 0, j = 0;
        while(i < n && j < n)
        {
          if(rightMax[j] > arr[i])
          {
            maxDist = Math.max( maxDist, j-i );
            j++;
          }
          else
            i++;
        }
      System.out.println(maxDist);
	}
}
