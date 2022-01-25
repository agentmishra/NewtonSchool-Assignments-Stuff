static void Pattern(int N){
//Enter your code here
int k=0;
int l=0;
for(int i=0; i<N; i++){
    for(int j=0; j<N; j++){
    System.out.print(k+" ");
    k=k+4;
    }
    l=l+6;
    System.out.println();
    k=l;
}
}
