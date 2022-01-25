static int DragonSlayer(int A, int B, int C,int D){
    //Enter your code here
    int DragonHealth = A - D;
    int NatsuHealth = C;
    while(DragonHealth > 0 && NatsuHealth > 0){
        NatsuHealth -= B;
        if(NatsuHealth <= 0) return 0;
        DragonHealth -= D;
    }
    if(DragonHealth >= NatsuHealth) return 0;
    else return 1;
}
