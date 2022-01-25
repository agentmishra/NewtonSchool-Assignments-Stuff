static int Icecreams (int N, int D){
//Enter your code here
while (D!=0){
N = 3*((int)Math.floor(N-N/2));
D--;
}
return N;
}
