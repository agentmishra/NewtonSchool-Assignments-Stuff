import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int[] arr = new int[N]; 
        int prev = sc.nextInt() ;
        arr[0]=prev;
        long sum = prev ;
        System.out.print("0 ");
        for(int i = 1 ; i < N ; i++){
            arr[i] = sc.nextInt();
            prev=arr[i-1];
            if(arr[i] < prev)
            {
                System.out.print( (prev - arr[i]) + " ");
                
                sum = sum + arr[i]+(prev - arr[i]);
                arr[i] = prev ;
                
            }
            else
            {
                System.out.print("0 ");
                
                sum = sum + arr[i];     
            }      
        }
        System.out.println();        
        System.out.print(sum);
	}
}
