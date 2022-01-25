static int Rook(int X, int Y){
    //Enter your code here
    if(X == 1 && Y == 1) return 0;
    else return (X == 1 || Y == 1) ? 1 : 2;
}
