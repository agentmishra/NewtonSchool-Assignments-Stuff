static char Race(int A,int B,int C){
//Enter your code here
if(Math.abs(C-A)==Math.abs(B-C)){
    return 'D';
}
else if(Math.abs(C-A)>Math.abs(B-C)){
    return 'S';
}
else{
    return 'N';
}
}
