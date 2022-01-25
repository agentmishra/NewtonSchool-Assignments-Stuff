import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework
import java.math.BigInteger;

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args){
        // Your code here
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        String[] str = input.split(" ");
        BigInteger a = new BigInteger(str[0]);
        BigInteger sum = a.add(new BigInteger(str[str.length - 1]));
        System.out.println(sum);
    }
}
