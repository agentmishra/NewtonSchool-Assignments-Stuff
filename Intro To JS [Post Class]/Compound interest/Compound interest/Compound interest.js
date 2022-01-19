// You need to return Compound Interest
// P: principal value
// T: rate of interest
// T: time in years 
function calculateCI(P, R, T)
{
       // Your code here.
       let amount = P * Math.pow((1 + R / 100), T);
       return (amount-P).toFixed(2);
    

}
