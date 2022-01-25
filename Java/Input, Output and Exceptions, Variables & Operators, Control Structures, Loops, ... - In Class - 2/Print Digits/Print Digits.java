static void Print_Digits(int N){
//Enter your code here
    String str = "";
    while(N > 0){
        str = digitToString(N % 10) + " " + str;
        N = N/10;
    }
    System.out.println(str);
}

static String digitToString(int digit){
    switch(digit){
        case 0: return "zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
    }
    return "Not a digit";
}
