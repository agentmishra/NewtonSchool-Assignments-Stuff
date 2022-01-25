static int  MaxInteger(int a ,int b, int c){
//Enter your code here
if ((a>b) &&(a>c)){
    return a;
}
else if ((b>a) &&(b>c)){
    return b;
}
else {
    return c;
}
}
