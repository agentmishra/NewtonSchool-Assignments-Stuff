static int RotationPolicy(int A, int B){
//Enter your code here
    int countDays = 0;
    for(int i = A; i <= B; i++){
        if(i % 2 == 0 && (i - 1) % 3 != 0)
            countDays++;
    }
    return countDays;
}
