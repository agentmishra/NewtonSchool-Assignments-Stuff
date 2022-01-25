static char grades(int a, int b, int c, int d, int e)
    {
      // Your code here
	  int avg;
	  avg = (a+b+c+d+e)/5;
	  
	  char grade;

		

			if(avg>=80)

			{

			grade = 'A';
			
			return grade;

			}

			else if(avg>=60 && avg<80)

			{

			
			grade = 'B';
			return grade;

			}

			else if(avg>=40 && avg<60)

			{

			
			grade = 'C';
			return grade;

			}

			else

			{

			
			grade = 'D';
			return grade;

			}

			

	}
