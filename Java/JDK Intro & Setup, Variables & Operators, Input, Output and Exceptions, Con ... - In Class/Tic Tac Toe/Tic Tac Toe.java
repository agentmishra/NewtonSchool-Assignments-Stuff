import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
                      // Your code here
		Scanner sc = new Scanner(System.in);
   
        
        char c = Character.toUpperCase(sc.next().charAt(0));
		char d = Character.toUpperCase(sc.next().charAt(0));
   
        
		if(c=='R'){
			System.out.println(c);
		}
		else if(d=='R'){
			System.out.println(d);
		}
		else if((c!='R') && (d=='J')){
			System.out.println(c);
		}
		else if((c=='J') && (d!='R')){
			System.out.println(d);
		}
		else{
			System.out.println("D");
		}
	}
}
