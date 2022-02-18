// num is input number
function reverseNumber(num) {
    // write code here
    // do not console.log
    // return the sum
    let rev_num = 0;
        while(num > 0)
        {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev_num;

}
