static int QueenAttack(int X, int Y, int P, int Q){
//Enter your code here
if (X == P)
        return 1;
 
    
    if (Y == Q)
        return 1;
 
    
    if (Math.abs(X - P) == Math.abs(Y - Q))
        return 1;
 
    
    return 0;


}
