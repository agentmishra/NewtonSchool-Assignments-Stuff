static int Phone(int N, int K, int M){
//Enter your code here 
float Mnew = M;
float memoryToFree = (Mnew/K);

int d = (int) Math.ceil(memoryToFree);


if(d<=N){
   float appsToFree=N-memoryToFree;
   return d;
 }
else{
  return -1;
}

}
