static int LeapYear(int year){
//enter your code here
int is_leap_year = 0;

        if (year % 4 == 0) {
 
           
            if (year % 100 == 0) {
               
                
                if (year % 400 == 0) {
                    
                    return 1;
                }
 
                else {
                    
                    return 0;
                }
            }
 
            
            return 1;
        }
 
        
        else
            return 0;
}
