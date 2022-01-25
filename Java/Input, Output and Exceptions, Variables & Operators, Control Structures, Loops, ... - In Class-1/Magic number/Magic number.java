static int MagicNumber(int N){
    //Enter your code here //
    if(numberContains79(N)) return N;
    if(N <= 79) return 79;
    boolean contains = false;
    int high = N;
    while(!contains){
        high++;
        if(numberContains79(high))
            contains = true;
    }
    int low = N;
    contains = false;
    while(!contains){
        low--;
        if(numberContains79(low))
            contains = true;
    }
    return ((N - low) <= (high - N)) ? low : high;
}

static boolean numberContains79(int N){
    boolean containing7 = false;
    boolean containing9 = false;
    while(N > 0){
        int digit = N % 10;
        if(digit == 7 && !containing7) containing7 = true;
        if(digit == 9 && !containing9) containing9 = true;
        if(containing7 && containing9) return true;
        N = N / 10;
    }
    return false;
}
