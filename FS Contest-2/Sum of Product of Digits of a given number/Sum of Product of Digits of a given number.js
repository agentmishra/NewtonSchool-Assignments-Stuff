function sumOfProductOfDigits(n1, n2)
{
         // Your code here
         let sum = 0;
     
    // Loop until one of the numbers
    // have no digits remaining
    while (n1 > 0 && n2 > 0)
    {
        sum += ((n1 % 10) * (n2 % 10));
        n1 = Math.floor(n1/10);
        n2 = Math.floor(n2/10);
    }
    return sum;
}
