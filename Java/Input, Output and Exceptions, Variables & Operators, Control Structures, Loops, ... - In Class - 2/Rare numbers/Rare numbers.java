static int Rare(int N, int K){
//Enter your code here
    while(N > 0){
        if((N % 10) % K != 0) return 0;
        N = N / 10;
    }
    return 1;
}
