static int calculator(char ch, int a, int b)
    {
         // your code here
         
        int result=0;
        
  
        switch (ch) {
  
        // case to add two numbers
        case '+':
  
            result = a+b;
  
            break;
  
        // case to subtract two numbers
        case '-':
  
            result = a-b;
  
            break;
  
        // case to multiply two numbers
        case '*':
  
            result = a*b;
  
            break;
  
        // case to divide two numbers
        case '/':
  
            result = a / b;
  
            break;
  
        default:
  
            System.out.println("You enter wrong input");
  
            break;
        }
  
        
    
                           return result;
    }
