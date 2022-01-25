static char grades(int a, int b, int c, int d, int e)
    {
      // Your code here
	  int avg;
	  avg = (a+b+c+d+e)/5;
	  //String grade = "Grade";
	  char grade;

		//System.out.print("The student Grade is: ");

			if(avg>=80)

			{

			grade = 'A';
			//System.out.println (grade);
			return grade;

			}

			else if(avg>=60 && avg<80)

			{

			//grade = grade.concat(" 'B");
			//System.out.println (grade);
			grade = 'B';
			return grade;

			}

			else if(avg>=40 && avg<60)

			{

			//grade = grade.concat(" 'B");
			//System.out.println (grade);
			grade = 'C';
			return grade;

			}

			else

			{

			//grade = grade.concat(" 'B");
			//System.out.println (grade);
			grade = 'D';
			return grade;

			}

			//return grade;

	}
