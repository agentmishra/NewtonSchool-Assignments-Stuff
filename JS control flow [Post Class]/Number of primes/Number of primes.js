// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
      // Your code here
      if(N < 2) return 0;
      if(N == 2) return 1;
      let count = 0;
      for(let i = 2; i <= N; i++){
            if(isPrime(i)) count++;
      }
      return count;
 }

 function isPrime(num) {
       if(num == 1) return false;
       for(let i = 2; i * i <= num; i++)
             if(num % i == 0) return false;
      return true;
 }
