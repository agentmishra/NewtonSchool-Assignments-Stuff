// You need to return the number of days in nth
// month of year
// n: input month number
function numberOfDays(n)
{
    // Your code here     
    return new Date(2021, n, 0).getDate();
}
